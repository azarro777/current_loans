import {Navbar} from './navbar/Navbar';
import {Card} from './card/Card';
import {Modal} from './modal/Modal';
import { useEffect } from 'react';
import './App.css';
import { fetchData } from '../actions/app';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const loans = useSelector(state => state.app.loans);
  const amount = useSelector(state => state.app.amount);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(loans, amount); //! Console log!

  const renderData = loans.map(item => {
    return <Card 
    key={item.id}
    id={item.id}
    title={item.title}
    tranche={item.tranche}
    available={item.available}
    term_remaining={item.term_remaining}
    />
  })

  return (
    <div className="app">
      <Navbar/>
      {renderData}
      <div className="app-container">
        <h2 className="app-title">Total amount available for investment:</h2>
        <h2 className="app-title app-amount">${amount}</h2>
      </div>
      <Modal/>
    </div>
  );
}

export default App;
