import { Task } from "./cart"
import AddCardModal from "./modal"
import { CardT, ListT } from "../assets/common/types/types"
import { OverLay } from "./overlay";

export const List = ({ item, tasks, setMove, deleteList, deleteTask, options }:
    {
        item: ListT, tasks: CardT[],
        options: string[],
        setMove: (id: number, status: string) => void
        deleteList: (id: number) => void,
        deleteTask: (id: number) => void
    }) => {
    const count = tasks.length;
    return (
        <div
            className="m-2 p-2 min-w-[250px]"
        >
            <div className="w-[100%] bg-gray-300 h-[3px]"></div>
            <div className="flex justify-content-between items-center">
                <div>
                    <span>{item.name}</span>
                </div>
                <div className="flex items-center">
                    <span>{count}</span>
                    <span className="cursor-pointer"><OverLay id={item.id} deleteItem={deleteList} /></span>
                </div>
            </div>
            <div className="w-[100%] bg-gray-300 h-[3px]"></div>
            <div className="flex justify-center m-2">
                <AddCardModal  />
            </div>
            <div className="flex flex-col">
                {
                    tasks.map(task => <Task 
                        options={options}
                        deleteTask={deleteTask} 
                        key={task.id} 
                        card={task} 
                        setMove={setMove} />)
                }
            </div>
        </div>
    )
}
