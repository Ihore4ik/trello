import { useState, useRef } from 'react';
import { UnknownAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '../store/features/store';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import { DOTS } from '../assets/images/image';

export const OverLay = ({ id, funcDelete, setIsEdit }:
    {
        id: number,
        funcDelete: ({ id }: { id: number }) => UnknownAction,
        setIsEdit: (arg0: boolean) => void,
    }) => {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(funcDelete({ id }));
        setShow(false);
    }

    return (
        <>
            <Button variant="outline" ref={target} onClick={() => setShow(!show)}>
                {DOTS}
            </Button>
            <Overlay target={target} show={show} placement="right" rootClose onHide={() => setShow(false)}>
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
                            borderRadius: '5px',
                            ...props.style,
                        }}
                        className="flex flex-col"
                    >
                        <Button variant='outline-primary' onClick={() => setIsEdit(true)}>Edit</Button>
                        <Button variant='outline-danger' onClick={handleDelete}>Delete</Button>
                    </div>
                )}
            </Overlay>
        </>
    );
}
