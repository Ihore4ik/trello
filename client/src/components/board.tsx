import { useState } from 'react';
import { LISTS, TASKS } from "../assets/data/data";
import { List } from "./list"
import { ListT, CardT } from '../assets/common/types/types';

function Board() {
  const [lists, setLists] = useState<ListT[]>(LISTS);
  const [tasks, setTasks] = useState<CardT[]>(TASKS);
  const [options, setOptions] = useState<string[]>(lists.map(el=>el.name));
  const getCurrentTasks = (title: string, array: CardT[]) => {
    return array.filter(el => el.status === title)
  }
 
  const createList = (text:string) =>  {
      const newList = [...lists,{
        id: Date.now(),
        name: text
      }]
      setLists(newList);
  }
  const setMove = (id: number, status: string) => {
    const newLists = tasks.map((item) => {
      return item.id === id ? { ...item, status } : item
    })
    setTasks(newLists);
  }

  const deleteList = (id:number)=>{
      const newList = lists.filter((list=>list.id !== id));
      setLists(newList);
      setOptions(newList.map(el=>el.name))
  }
  const deleteTask = (id:number)=>{
    const newList = tasks.filter((task=>task.id !== id));
    setTasks(newList);
    console.log("delete")
}
  return (
    <main>
      <div className=" flex pt-[150px] p-[20px] h-[100%] w-fit-content">
        {
          lists.map((item) =>
            <List key={item.id} options={options} deleteTask={deleteTask} deleteList={deleteList} item={item} setMove={setMove} tasks={getCurrentTasks(item.name, tasks)} />
          )
        }
      </div>
    </main>
  )
}

export default Board