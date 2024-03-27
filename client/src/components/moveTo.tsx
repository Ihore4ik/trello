import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { moveToList } from '../store/features/cardSlice';
import { useAppDispatch, useAppSelector } from '../store/features/store';

export const MoveTo = ({ status, id }: { status: string, id: number }) => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState(status);
    const { options } = useAppSelector(state => state.lists)
    const handleCheck = (event: { preventDefault: () => void; target: { value: string; }; }) => {
        event.preventDefault();
        dispatch(moveToList({ status: event.target.value, id }));
        setValue(event.target.value);
    }

    return (
        <Form.Select aria-label="select-status" value={value} onChange={handleCheck}>
            {
                options.map((item) => <option key={item} >{item}</option>)
            }
        </Form.Select>
    );
}
