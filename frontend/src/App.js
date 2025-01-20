import './App.css';
import Account from './components/Accounts/Account';
import { BrowserRouter , Routes , Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<Account></Account>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
