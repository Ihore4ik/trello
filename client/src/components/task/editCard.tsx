import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppDispatch, useAppSelector } from '../../store/features/store';
import { editTask } from '../../store/features/cardSlice';
import { CardT } from '../../assets/common/types/types';

interface IFormData {
  task: {
    id: number;
    name: string;
    description: string;
    priority: string;
    status: string;
    date: string;
  }
}

function AddCardModal({ card, show, handleClose }: {
  card: CardT, show: boolean,
  handleClose: () => void
}) {
  const { options } = useAppSelector(state => state.lists);
  const dispatch = useAppDispatch();
  const [data, setData] = useState<IFormData>({
    task: {
      id: card.id,
      name: card.name,
      description: card.description,
      priority: card.priority,
      status: card.status,
      date: card.date,
    }
  });

  const onSetDate = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setData({
      task: {
        ...data.task,
        date: e.target.value
      }
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      task: {
        ...data.task,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setData({
      task: {
        ...data.task,
        [e.target.name]: e.target.value,
      }
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(editTask(data.task));
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit} id="form-card">
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Task name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter task name" value={data.task.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" placeholder="Enter description" value={data.task.description} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={data.task.date} onChange={onSetDate} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Select aria-label="Select" name="priority" value={data.task.priority} onChange={handleSelect}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Select" value={data.task.status} name="status" onChange={handleSelect}>
                {
                  options.map(el => <option key={el}>{el}</option>)
                }
              </Form.Select>
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" form="form-card" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCardModal;
