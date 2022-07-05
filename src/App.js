import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs,productInputs } from './Datasources/formSource';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List Datatype="users" />} />
              <Route path=":userid" element={<Single type="user"/>} />
              <Route path="new" element={<New inputs={userInputs} edit={false} title="Add New User"/>} />
            </Route>
            <Route path="Products">
              <Route index element={<List Datatype="products" />} />
              <Route path=":productid" element={<Single type="product"/>} />
              <Route path="new" element={<New inputs={productInputs} edit={false} title="Add New Product"/>} />
            </Route>
          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
