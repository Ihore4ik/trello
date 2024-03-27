import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { DOTS } from '../assets/images/image';

export const OverLay = ({ id, deleteItem }
    : { id: number, deleteItem:(id: number)=> void }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <Button variant="outline" ref={target} onClick={() => setShow(!show)}>
                {DOTS}
            </Button>
            <Overlay target={target.current} show={show} placement="right">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                    <div
                        {...props}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'rgba(243, 244, 246, 1)',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 5,
                            ...props.style,
                        }}
                        className="flex flex-col"
                    >
                        <Button variant='outline-primary'>Edit</Button>
                        <Button variant='outline-danger' onClick={(() => deleteItem(id))}>Delete</Button>
                    </div>
                )}
            </Overlay>
        </>
    );
}
