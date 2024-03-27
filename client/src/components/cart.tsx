import { CardT } from "../assets/common/types/types"
import { MoveTo } from "./moveTo"
import Card from 'react-bootstrap/Card';
import { Priority } from "./badge";
import { OverLay } from "./overlay";

export const Task = ({ card, setMove, deleteTask,options }:
   { card: CardT, 
    options: string[],
    setMove: (id: number, status: string) => void
    deleteTask: (id: number) => void
   }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="flex justify-content-between">{card.name}<span className="cursor-pointer">
        <OverLay id={card.id} deleteItem={deleteTask} />
      </span>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {card.description}
        </Card.Text>
        <Card.Text>
          Data
        </Card.Text>
        <Card.Text>
          <Priority priority={card.priority} />
        </Card.Text>
        <MoveTo status={card.status} options={options} id={card.id} setMove={setMove} />
      </Card.Body>
    </Card>
  );
}
