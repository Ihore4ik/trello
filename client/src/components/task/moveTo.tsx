import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { IList } from '../../assets/common/types/interfaces';
import { useMoveToListMutation } from '../../store/features/apiTaskSlice';

export const MoveTo = ({ status, id, options }: { status: string, id: number, options: IList[] }) => {
 
    const [moveToList] = useMoveToListMutation();
    const [value, setValue] = useState(status);
    const handleCheck = (event: { preventDefault: () => void; target: { value: string; }; }) => {
        event.preventDefault();
        moveToList({ id, status: event.target.value });
        setValue(event.target.value);
    }

    return (
        <Form.Select aria-label="select-status" value={value} onChange={handleCheck}>
            {
                options.map((item) => <option key={item.id} >{item.name}</option>)
            }
        </Form.Select>
    );
}
