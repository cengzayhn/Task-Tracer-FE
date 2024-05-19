import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

let stompClient: Client | null = null;

export interface ChatMessage {
  senderName: string;
  message: string;
  status: string;
  receiverName?: string;
}

export const connect = (
  userData: any,
  setUserData: Function,
  subscribeToTopics: (username: string, privateChats: Map<string, ChatMessage[]>, setPrivateChats: Function, setMessages: Function) => void,
  userJoin: (username: string) => void,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function,
  setMessages: Function
) => {
  const sock = new SockJS('http://localhost:8081/ws');
  stompClient = new Client({
    webSocketFactory: () => sock as WebSocket
  });
  stompClient.onConnect = () => onConnected(userData, setUserData, subscribeToTopics, userJoin, privateChats, setPrivateChats, setMessages);
  stompClient.onStompError = onError;
  stompClient.activate();
};

const onConnected = (
  userData: any,
  setUserData: Function,
  subscribeToTopics: (username: string, privateChats: Map<string, ChatMessage[]>, setPrivateChats: Function, setMessages: Function) => void,
  userJoin: (username: string) => void,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function,
  setMessages: Function
) => {
  setUserData((prevData: any) => ({ ...prevData, connected: true }));
  subscribeToTopics(userData.username, privateChats, setPrivateChats, setMessages);
  userJoin(userData.username);
};

export const subscribeToTopics = (
  username: string,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function,
  setMessages: Function
) => {
  if(stompClient && stompClient.connected){
    stompClient?.subscribe('/chatroom/public', (payload) => onMessageReceived(payload, privateChats, setPrivateChats, setMessages));
    stompClient?.subscribe(`/user/${username}/private`, (payload) => onPrivateMessage(payload, privateChats, setPrivateChats));
  }else{
    console.error("STOMP client is not connected yet.");
  }
};

export const userJoin = (username: string) => {
  const chatMessage: ChatMessage = {
    senderName: username,
    message: '',
    status: 'JOIN'
  };
  stompClient?.publish({ destination: '/app/message', body: JSON.stringify(chatMessage) });
};

const onMessageReceived = (
  payload: any,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function,
  setMessages: Function
) => {
  const payloadData: ChatMessage = JSON.parse(payload.body);
  handleReceivedMessage(payloadData, privateChats, setPrivateChats, setMessages);
};

const onPrivateMessage = (
  payload: any,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function
) => {
  const payloadData: ChatMessage = JSON.parse(payload.body);
  handleReceivedPrivateMessage(payloadData, privateChats, setPrivateChats);
};

export const handleReceivedMessage = (
  payloadData: ChatMessage,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function,
  setMessages: Function
) => {
  switch (payloadData.status) {
    case 'JOIN':
      if (!privateChats.has(payloadData.senderName)) {
        privateChats.set(payloadData.senderName, []);
        setPrivateChats(new Map(privateChats));
      }
      break;
    case 'MESSAGE':
      setMessages((prevMessages: ChatMessage[]) => [...prevMessages, payloadData]);
      break;
  }
};

export const handleReceivedPrivateMessage = (
  payloadData: ChatMessage,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function
) => {
  if (privateChats.has(payloadData.senderName)) {
    privateChats.get(payloadData.senderName)!.push(payloadData);
    setPrivateChats(new Map(privateChats));
  } else {
    const list: ChatMessage[] = [payloadData];
    privateChats.set(payloadData.senderName, list);
    setPrivateChats(new Map(privateChats));
  }
};

const onError = (err: any) => {
  console.error(err);
};

export const sendValue = (username: string, message: string, setUserData: Function) => {
  if (stompClient) {
    const chatMessage: ChatMessage = {
      senderName: username,
      message,
      status: 'MESSAGE'
    };
    stompClient.publish({ destination: '/app/message', body: JSON.stringify(chatMessage) });
    setUserData((prevData: any) => ({ ...prevData, message: '' }));
  }
};

export const sendPrivateValue = (
  username: string,
  receiverName: string,
  message: string,
  setUserData: Function,
  privateChats: Map<string, ChatMessage[]>,
  setPrivateChats: Function
) => {
  if (stompClient) {
    const chatMessage: ChatMessage = {
      senderName: username,
      receiverName,
      message,
      status: 'MESSAGE'
    };

    if (username !== receiverName) {
      privateChats.get(receiverName)!.push(chatMessage);
      setPrivateChats(new Map(privateChats));
    }
    stompClient.publish({ destination: '/app/private-message', body: JSON.stringify(chatMessage) });
    setUserData((prevData: any) => ({ ...prevData, message: '' }));
  }
};


export const disconnect = () => {
    if(stompClient && stompClient.connected){
        stompClient.deactivate();
    }
}
