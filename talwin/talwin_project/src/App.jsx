// import { useState } from 'react';
import './App.css'
// import UsrState from './cssjs.jsx';
// import Cssl from './css.jsx';
// import Login from './login.jsx';
import { Money } from './Money Project Short/Balace.jsx';
import Income from './Money Project Short/Income.jsx';
import Moneyhunt from './Money Project Short/Transfation.jsx';
import From from './Money Project Short/addtrns.jsx';
import Rayhan from '../src/Mountent/constractor.jsx'
import Dom from './Mountent/memo.jsx'
import Loll from './Mountent/ref.jsx'
// import Higherorder from './Mountent/Higherorder.jsx'
// import Usereffect from './Mountent/Userefferct.jsx'
// import CounterReducer from './Mountent/reducer.jsx'
// import UseCa from './Mountent/usecall.jsx'
// import Datfatch from './Mountent/My Json/json.jsx'
import Lol2 from './Mountent/My Json/imge.jsx'



function App() {

//   const [transactions, setTransactions] = useState([]);
//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//   }
//   const calculateBalance = () => {
//     return transactions.reduce((acc, trans) => acc + trans.amount, 0);

//     }

  
//   const calculateIncome = () => {
//     return transactions.filter((trans)=> trans.amount > 0)
//     .reduce((acc, trans) => acc + trans.amount, 0);
//   }

//   const calculateExpense = () => {
//     return transactions.filter((trans)=>  trans.amount < 0)
//     .reduce((acc, trans) => acc + trans.amount, 0);
  
  return (
  <>
  {/* <UsrState /> */}
  {/* < Rayhan  Don="Hack the bug Crowd"/>
  < Dom /> */}
  {/* < Loll/> */}
  {/* < Higherorder /> */}
  {/* < Usereffect /> */}
  {/* < CounterReducer /> */}
  {/* < UseCa /> */}
  {/* < Datfatch /> */}
  < Lol2 />
  {/* <Cssl /> */}
  {/* <Login /> */}
  {/* <Money  balance={calculateBalance()}/>
  <Income income={calculateIncome()} expense={calculateExpense()}/>
  <Moneyhunt transactions={transactions}/>
  <From addTransaction={addTransaction} /> */}
 </>
  )
}



export default App;
