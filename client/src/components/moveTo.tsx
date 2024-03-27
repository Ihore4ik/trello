// export const MoveTo = ({ status, id, setMove }: {
//     status: string, id: number,
//     setMove: (id: number, status: string) => void
// }) => {
//     const options = ["To Do", "In progress", "Planned", "Done", "X", "Pl"]
//     return (
//         <div className="moveTo">
//             <select onChange={(e) => setMove(id, e.target.value)}>
//                 {options.map(option =>
//                     <option value={option}
//                         key={option}
//                         selected={option === status}

//                     >{option}</option>)}
//             </select>
//         </div>
//     )
// }
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export const MoveTo = ({ status, id, setMove, options }: {
    options: string[],
    status: string, id: number,
    setMove: (id: number, status: string) => void
}) => {
    const [value, setValue] = useState(status);
    // const options = ["To Do", "In progress", "Planned", "Done", "X", "Pl"]
    const handleCheck = (event: { preventDefault: () => void; target: { value: string; }; }) => {
        event.preventDefault();
        setMove(id, event.target.value);
        setValue(event.target.value);
    }
    
    return (
        <Form.Select aria-label="select-status" value={value} onChange={handleCheck}>
            {
                options.map(item => <option key={item} >{item}</option>)
            }
        </Form.Select>
    );
}
