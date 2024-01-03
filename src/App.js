import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct";
import NotFound from "./Components/NotFound";
import SearchProduct from "./Components/SearchProduct";
import ViewAll from "./Components/ViewAll";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<AddProduct/>}/>
  <Route path="/search" exact element={<SearchProduct/>}/>
  <Route path="/viewAll" exact element={<ViewAll/>}/>
  <Route path="*" exact element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
