import { ITask } from "../interfaces/ITask";

export let data:ITask[] =[
    {
        _id: "5f5f67d8a5b9a3b3c8c3c3c3",
        text: "Hello there!",
        isCompleted: false
    },{
        _id: "5f5f67d8a5b9a3b3c8c3c3c4",
        text: "Hello World!",
        isCompleted: true
    },{
        _id: "5f5f67d8a5b9a3b3c8c3c3c5",
        text: "Hi World!",
        isCompleted: false
    }
]
export const newData = (newdata:ITask[]) => {
    data = newdata;
}

export default data;