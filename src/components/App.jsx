import Navbar from './Navbar/Navbar';
import CartWidget from './CartWidget/CartWidget';
import './App.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos a la la tienda de Deportes e-comer mas completa"}/>
    </>
  );
}

export default App;
