import './App.css';
import Account from './components/Accounts/Account';
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Account></Account>}></Route>
         <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
         
       </Routes>
    </BrowserRouter>
  );
}

export default App;
