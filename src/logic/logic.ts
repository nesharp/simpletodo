import {data, newData} from '../data/data'
import { ITask } from '../interfaces/ITask.js'
export const deleteData = async (id: string) => {
    try {
        newData(data.filter((task: ITask) => task._id !== id));
        console.log( "From deleted:",  data)
    }
    catch (error) {
        console.log(error)
    }
}