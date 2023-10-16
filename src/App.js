
import './App.css';
import MainDashboard from './Components/Main_Dashboard';
import {Route,Routes} from "react-router-dom"
import Products from './Components/Products';
import Coustmor from './Components/Coustmor';
import Income from './Components/Income';
import Promote from './Components/Promote';
import Help from './Components/Help';
import Dash_Board from './Components/Nav_DashBoard/Dash_Board';
import Dash_BoardInfo from './Components/DashBoardInfo/Dash_BoardInfo';
import "../src/Components/Main_Dashboard.css"
import MainIncome from './Components/MainIncome';

function App() {
  return (
   <div className='Main_Ui_Div'>
    <Dash_Board/>

    <div className='Content_div'>
   <Routes>
        <Route path="/" element={<Dash_BoardInfo/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path='/Customers' element={<Coustmor/>}/>
        <Route path='/Income' element={<MainIncome/>}/>
        <Route path='/Promote' element={<Promote/>}/>
        <Route path="/Help" element={<Help/>}/>
   </Routes>
   </div>
   </div>
  );
}

export default App;
