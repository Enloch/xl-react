import "./App.css";
import PaginasColeccion from "./pages/linkColecciones";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <PaginasColeccion />
    </ChakraProvider>
  );
}

export default App;
