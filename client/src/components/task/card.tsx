import Card from 'react-bootstrap/Card';
import { deleteTask } from '../../store/features/cardSlice';
import { CardT } from "../../assets/common/types/types";
import { MoveTo } from "./moveTo";
import { Priority } from "./badge";
import { OverLay } from "../overlay";
import { MdOutlineCalendarToday as Icon } from "react-icons/md";
import dayjs from "dayjs";
import AddCardModal from './editCard';
import { useState } from 'react';

export const Task = ({ card }: { card: CardT }) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const setDate = dayjs(card.date).format('ddd, D MMM');
  return (
    <Card className="mb-3">
      <AddCardModal card={card} show={show} handleClose={handleClose}/>
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
          <Icon className='mr-2'/> {setDate}
        </Card.Text>
        <Card.Text>
          <Priority priority={card.priority} />
        </Card.Text>
        <MoveTo status={card.status} id={card.id} />
      </Card.Body>
    </Card>
  );
}
