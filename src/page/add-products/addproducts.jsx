import {
  Container,
  ContentAdd,
  ContentInput,
  Title,
  VisuallyHiddenInput,
} from "./styled.addproducts";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AddProducts = () => {
  
  return (
    <>
      <Container>
        <Title>Agregar productos</Title>
        <ContentAdd>
          <ContentInput>
            <TextField id="filled-basic" label="Nombre del producto" variant="filled"/>
          </ContentInput>
          <ContentInput>
            <TextField id="filled-basic" label="Precio del producto" variant="filled"/>
          </ContentInput>
          <ContentInput>
            <TextField id="filled-basic" label="Cantindad" variant="filled"/>
          </ContentInput>
          <ContentInput>
            <Button component="label" size="large" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file"/>
            </Button>
          </ContentInput>
        </ContentAdd>
        <ContentAdd>
          <Button variant="contained">Guardar</Button>
        </ContentAdd>
      </Container>
    </>
  );
};

export default AddProducts;
