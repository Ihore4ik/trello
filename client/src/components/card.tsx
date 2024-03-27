import Card from 'react-bootstrap/Card';
import { deleteTask } from '../store/features/cardSlice';
import { CardT } from "../assets/common/types/types";
import { MoveTo } from "./moveTo";
import { Priority } from "./badge";
import { OverLay } from "./overlay";
import { MdOutlineCalendarToday as Icon } from "react-icons/md";
import dayjs from "dayjs";

export const Task = ({ card }: { card: CardT }) => {

  const setDate = dayjs(card.date).format('ddd, D MMM');
  return (
    <Card className="mb-3">
      <Card.Header className="flex justify-content-between">{card.name}<span className="cursor-pointer">
        <OverLay id={card.id} func={deleteTask} />
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
