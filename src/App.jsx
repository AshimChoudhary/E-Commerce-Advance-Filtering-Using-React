import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recomended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import './index.css';

function App() {
  return (
    <>
      <Sidebar />
      <Nav />

      <Recommended />
      <Products />
    </>
  );
}

export default App;
