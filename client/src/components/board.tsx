import { List } from "./list/list";
import { useGetListsQuery } from '../store/features/apiListSlice';
import { useGetTasksQuery } from '../store/features/apiTaskSlice';
import { Task } from "../assets/common/types/interfaces";

function Board() {
  const { data } = useGetListsQuery();
  const { data: tasks, isSuccess } = useGetTasksQuery()
  const getCurrentTasks = (title: string, array: Task[]) => {
    if (isSuccess) {
      return array.filter(el => el.status === title);
    }
  }
  return (
    <main>
      <div className=" flex pt-[150px] p-[20px] h-[100%] w-fit-content">
        {
          data?.map((item: { id: any; name: any; }) =>
            isSuccess && <List key={item.id} item={item} tasks={getCurrentTasks(item.name, tasks)} />
          )
        }
      </div>
    </main>
  )
}

export default Board
