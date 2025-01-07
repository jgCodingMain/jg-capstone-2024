
import './App.css';
import Header from '../src/components/homepage/Header'
import Main from './Main';
import Footer from './Footer';
import {Routes,Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
