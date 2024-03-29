import { useAppSelector } from '../store/features/store';
import { ICard } from '../store/features/cardSlice';
import { List } from "./list/list";


function Board() {
  const { lists } = useAppSelector(state => state.lists);
  const { cards } = useAppSelector(state => state.tasks);
  const getCurrentTasks = (title: string, array: ICard[]) => {
    return array.filter(el => el.status === title);
  }

  return (
    <main>
      <div className=" flex pt-[150px] p-[20px] h-[100%] w-fit-content">
        {
          lists.map((item) =>
            <List key={item.id} item={item} tasks={getCurrentTasks(item.name, cards)} />
          )
        }
      </div>
    </main>
  )
}

export default Board