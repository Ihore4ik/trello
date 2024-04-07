import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUpdateListMutation, useDeleteListMutation } from "../../store/features/apiListSlice";
import { useAddTaskMutation } from "../../store/features/apiTaskSlice";
import { Task } from "../task/card";
import { IList, Task as Card } from "../../assets/common/types/interfaces";
import { OverLay } from "../overlay";

const task = (status: string) => {
    return {
        name: "Task name",
        description: "Task description",
        priority: "Low",
        date: new Date().toISOString(),
        status
    }
}

export const List = ({ item, tasks, options }: { item: IList, tasks: Card[] | undefined,options: IList[] }) => {
    const count = tasks?.length;
    const [value, setValue] = useState(item.name);
    const [isEdit, setIsEdit] = useState(false);
    const [deleteList] = useDeleteListMutation();
    const [addTask] = useAddTaskMutation();
    const [updateList] = useUpdateListMutation();

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value.trim() !== "" && value !== item.name) {
            updateList({ id: item.id, name: value });
        }
        setIsEdit(false);
    }
    return (
        <div
            className="m-2 p-2 min-w-[250px]"
        >
            <div className="w-[100%] bg-gray-300 h-[3px]"></div>
            <div className="flex justify-content-between items-center">
                <div>
                    <span>
                        {
                            isEdit ? <Form onSubmit={onFormSubmit}>
                                <Form.Group className="" controlId="text">
                                    <Form.Control type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                                </Form.Group>
                            </Form>
                                :
                                item.name
                        }
                    </span>
                </div>
                <div className="flex items-center">
                    <span>{count}</span>
                    <span className="cursor-pointer"><OverLay id={item.id} funcDelete={deleteList} setIsEdit={setIsEdit} />
                    </span>
                </div>
            </div>
            <div className="w-[100%] bg-gray-300 h-[3px]"></div>
            <div className="flex justify-center m-2">
                <Button variant="outline-secondary" onClick={() => addTask(task(item.name))}>
                    Add New Card
                </Button>
            </div>
            <div className="flex flex-col">
                {
                    tasks && tasks.map(task => <Task
                        key={task.id}
                        card={task} 
                        options={options}
                        />)
                }
            </div>
        </div>
    )
}
