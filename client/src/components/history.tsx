import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaHistory } from 'react-icons/fa';

export const History = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <> 
           <Button onClick={handleShow} variant="outline-secondary" className="mr-2 p-3" style={{ display: "flex", alignItems: "center" }}>
                <FaHistory /> History
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton className='bg-gray-500'>
                    <Offcanvas.Title>History</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
