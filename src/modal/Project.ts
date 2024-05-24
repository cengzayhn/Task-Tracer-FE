export interface IProject {
    id: string;
    name: string;
    createdDate: string;
    closedDate: string;
    taskIdList: string[];
    memberIdList: string[];
    isOpen: boolean;
}