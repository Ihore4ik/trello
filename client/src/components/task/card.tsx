import { useState } from 'react';
import dayjs from "dayjs";
import { MdOutlineCalendarToday as Icon } from "react-icons/md";
import Card from 'react-bootstrap/Card';
import { useDeleteTaskMutation } from '../../store/features/apiTaskSlice';
import { IList, Task as ICard } from "../../assets/common/types/interfaces";
import { MoveTo } from "./moveTo";
import { Priority } from "./badge";
import { OverLay } from "../overlay";
import AddCardModal from './editCard';


export const Task = ({ card, options }: { card: ICard, options: IList[] }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [deleteTask] = useDeleteTaskMutation();
  const setDate = dayjs(card.date).format('ddd, D MMM');
  const data = options.map(item=>item.name)
  return (
    <Card className="mb-3">
      <AddCardModal card={card} show={show} options={data} handleClose={handleClose} />
      <Card.Header className="flex justify-content-between items-center">{card.name}
        <span className="cursor-pointer">
          <OverLay id={card.id} funcDelete={deleteTask} setIsEdit={setShow} />
        </span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {card.description}
        </Card.Text>
        <Card.Text className='flex items-center'>
          <Icon className='mr-2' /> {setDate}
        </Card.Text>
        <Card.Text>
          <Priority priority={card.priority} />
        </Card.Text>
        <MoveTo status={card.status} options={options} id={card.id} />
      </Card.Body>
    </Card>
  );
}
