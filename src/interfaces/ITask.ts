export interface ITask {
    _id: string,
    text: string,
    isCompleted: boolean
}

export interface IFTask {
    _id: string,
    text: string,
    isCompleted: boolean,
    removeTodo: (id: string) => void
}