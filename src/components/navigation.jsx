import { Header, Nav } from "./styled.navigation";
import Button from '@mui/material/Button';

const Navigation = () => {
  return (
    <>
      
        <Header>
          <Nav to="/">
            <Button variant="outlined">Ver produtos</Button>
          </Nav>

          <Nav to="/add">
            <Button variant="outlined">Agregar productos</Button>
          </Nav>
        </Header>

    </>
  );
};

export default Navigation;
