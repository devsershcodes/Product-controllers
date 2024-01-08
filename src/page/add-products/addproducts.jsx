import {
  Button,
  Container,
  ContentAdd,
  ContentInput,
  Input,
  Title,
} from "./styled.addproducts";

const AddProducts = () => {
  return (
    <>
      <Container>
        <Title>Agregar productos</Title>
        <ContentAdd>
          <ContentInput>
            <Input placeholder="Nombre del producto"/>
          </ContentInput>
          <ContentInput>
            <Input placeholder="Precio del producto"/>
          </ContentInput>
          <ContentInput>
            <Input placeholder="Cantindad"/>
          </ContentInput>
          <ContentInput>
            <Input className="file" type="file"/>
          </ContentInput>
        </ContentAdd>
        <ContentAdd>
          <Button>Guardar</Button>
        </ContentAdd>
      </Container>
    </>
  );
};

export default AddProducts;
