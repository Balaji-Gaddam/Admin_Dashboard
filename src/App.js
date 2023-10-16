import './App.css';
import Dash_Board from './Components/Nav_DashBoard/Dash_Board';
import Dash_BoardInfo from './Components/DashBoardInfo/Dash_BoardInfo';
import "../src/Components/Main_Dashboard.css"


function App() {
  return (
   <div className='Main_Ui_Div'>
    <Dash_Board/>
    <div className='Content_div'>
        <Dash_BoardInfo/>
    </div>
   </div>
  );
}

export default App;
