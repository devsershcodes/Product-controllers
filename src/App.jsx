import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import NavRoutes from "./components/layout";
import ViewProducts from "./page/view-products/viewproducts";
import { ContainerMain } from "./components/styled.navigation";
/* import AddProducts from "./page/add-products/addproducts"; */
import Example from "./components/table.addproduct";
function App() {
  return (
    <>
      <ContainerMain>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <NavRoutes>
                <ViewProducts />
              </NavRoutes>
            }
          />
          <Route path="/add" element={
            <NavRoutes>
              <Example/>
            </NavRoutes>
          } />
        </Routes>
      </ContainerMain>
    </>
  );
}

export default App;
