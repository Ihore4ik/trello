import { Task } from "../task/card";
import { deleteList, editList, } from '../../store/features/listSlice';
import { CardT, ListT } from "../../assets/common/types/types";
import { OverLay } from "../overlay";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../../store/features/store";
import { setStatus, addTask } from "../../store/features/cardSlice";

export const List = ({ item, tasks }: { item: ListT, tasks: CardT[] }) => {
    const dispatch = useAppDispatch();
    const count = tasks.length;
    const [value, setValue] = useState(item.name);
    const [isEdit, setIsEdit] = useState(false);

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value.trim() !== "" && value !== item.name) {
            dispatch(editList({ id: item.id, name: value }));
            dispatch(setStatus({ oldStatus: item.name, newStatus: value }))
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
                <Button variant="outline-secondary" onClick={() => dispatch(addTask({ status: item.name }))}>
                    Add New Card
                </Button>
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
