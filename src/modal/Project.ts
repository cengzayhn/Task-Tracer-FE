export interface IProject {
    id: string;
    name: string;
    createdDate: string;
    closedDate: string;
    taskIdList: string[];
    usernameList: string[];
    isOpen: boolean;
}