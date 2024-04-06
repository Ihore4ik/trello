import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from 'react-icons/fa6';
import { useAddListMutation } from '../../store/features/apiListSlice';
import { IFormData } from '../../assets/common/types/interfaces';



function AddListModal() {
    const [addList] = useAddListMutation();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState<IFormData>(
        { name: "" }
    );
    const handleClose = () => {
        setValue({
            name: ""
        });
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            name: e.target.value
        })
    }
    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value.name.trim() !== "") {
            addList(value);
            handleClose()
        }

    }
    return (
        <>
            <Button onClick={handleShow} variant="dark" className="p-3" style={{ display: "flex", alignItems: "center" }}>
                <FaPlus className='mr-2' /> Create new list
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onFormSubmit} id="form-list">
                        <Form.Floating className="mb-3"  >
                            <Form.Control
                                onChange={handleChange}
                                id="floatingInputCustom"
                                type="name"
                                placeholder="Name of list"
                                value={value.name}
                            />
                            <label htmlFor="floatingInputCustom">List name</label>
                        </Form.Floating>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" form="form-list" >
                        Save list
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddListModal;
