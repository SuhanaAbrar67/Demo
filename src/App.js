
import './App.css';
import Home from './Component/Home'
import {BrowserRouter,Routes,Route}from "react-router-dom";
import ArrowFunction from './pages/ArrowFunction';
import Map from './pages/Map';
import Destructure from './Component/Destructure';
import SpreadOp from './pages/SpreadOp';
import TernaryOp from './pages/TernaryOp';
import Taskb from './pages/Taskb';
import Header from './Component/Header';
import Es6 from './Component/Es6';
import Table from './pages/Table';
import Category1 from './Component/Category1';
import Product from './Component/Product';
import Register from './Component/Register';
import Logout from './Component/Logout';
import Login from './Component/Login';
import Abr from './Component/Abr';









function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/ArrowFunction" element={<ArrowFunction/>}/>
        <Route exact path="/map" element={<Map/>}/>
        <Route exact path="/des" element={<Destructure/>}/>
        <Route exact path="/spread" element={<SpreadOp/>}/>
        <Route exact path="/ternary" element={<TernaryOp/>}/>
        <Route exact path="/Taskb" element={<Taskb/>}/>
        <Route exact path="/es6" element={<Es6/>}/>
        <Route exact path="/head" element={<Header/>}/>
        <Route exact path="/tab" element={<Table/>}/>
        <Route exact path="/cat" element={<Category1/>}/>
        <Route exact path="/cat/product/:catname" element={<Product/>}/>
        <Route exact path="/reg" element={<Register/>}/>
        <Route exact path='/logout' element={<Logout/>}> </Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/abr' element={<Abr/>}></Route>
        


        
        

        
        
    
        
        
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
