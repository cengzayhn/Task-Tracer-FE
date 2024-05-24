import { IState } from "./State";

export interface ITask {
    projectId: string;
    id: string
    title: string;
    description: string;
    createdBy: string;
    createdDate: string;
    state: IState;
}