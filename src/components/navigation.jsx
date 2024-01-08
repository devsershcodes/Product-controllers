import { Button, Header, Nav } from "./styled.navigation";

const Navigation = () => {
  return (
    <>
      
        <Header>
          <Nav to="/">
            <Button>Ver produtos</Button>
          </Nav>

          <Nav to="/add">
            <Button>Agregar productos</Button>
          </Nav>
        </Header>

    </>
  );
};

export default Navigation;
