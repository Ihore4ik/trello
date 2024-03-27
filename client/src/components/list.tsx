import { Task } from "./card";
import AddCardModal from "./modal";
import { deleteList } from '../store/features/listSlice';
import { CardT, ListT } from "../assets/common/types/types";
import { OverLay } from "./overlay";

export const List = ({ item, tasks }: { item: ListT, tasks: CardT[] }) => {
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
                    <span className="cursor-pointer"><OverLay id={item.id} func={deleteList} /></span>
                </div>
            </div>
            <div className="w-[100%] bg-gray-300 h-[3px]"></div>
            <div className="flex justify-center m-2">
                <AddCardModal />
            </div>
            <div className="flex flex-col">
                {
                    tasks.map(task => <Task
                        key={task.id}
                        card={task} />)
                }
            </div>
        </div>
    )
}
