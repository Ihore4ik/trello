import { Container, Navbar, Stack } from "react-bootstrap";
import AddListModal from "./addList";
import { History } from "./history";

export const Header = () => {
   return (
      <header >
         <Navbar fixed="top" className="bg-body-tertiary">
            <Container className="p-4">
               <Navbar.Brand href="#home" className="font-bold">My Task Board</Navbar.Brand>
               <Stack direction="horizontal" gap={2}>
                  <History />
                  <AddListModal />
               </Stack>
            </Container>
         </Navbar>
      </header>
   )
}
