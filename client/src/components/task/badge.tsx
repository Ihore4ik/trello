import { Badge } from "react-bootstrap";

export const Priority = ({ priority }: { priority: string }) => {
    const level = (priority === "Low")
        ? "warning" : (priority === "Medium")
            ? "primary" : "success";

    return (
        <Badge pill bg={level} className="w-[100%] p-2">
            {priority}
        </Badge>
    )
}