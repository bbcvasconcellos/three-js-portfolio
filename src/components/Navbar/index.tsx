import { 
  Button, 
  Container, 
  Links, 
  List, 
  ListItem, 
  Logo 
} from "./styles";

export const Navbar = () => (
  <Container>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>About me</ListItem>
        <ListItem>Portfolio</ListItem>
        <ListItem>Contact</ListItem>
      </List>
      <Button>Hire now</Button>
  </Container>
  
)