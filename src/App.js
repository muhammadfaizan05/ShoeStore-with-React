import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link,useParams } from 'react-router-dom';
import Header from './components/Header/header';
import LandingPage from './components/LandingPage/landing';
import Shoes from './components/Shoes/shoes';
import Store from './store/store';
import { Provider} from 'react-redux';
import Mens from './components/Mens/mens';
import Female from './components/females/female';
import Childrens from './components/childrens/children';
import Details from './components/ShowDetail/Detailes';
import Cart from './components/Cart/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer/footer';
import Practise from './components/Practise/practise';
function App() {

 


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
          <Provider store={Store}>
        <Routes>

          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home'  element={<LandingPage/>}/>
          <Route path="/shoes"  element={<Shoes/>}/>
          <Route path="/mens"  element={<Mens/>}/>
          <Route path="/female"  element={<Female/>}/>
          <Route path="/kids"  element={<Childrens/>}/>
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/shoesdetail/:id"  element={<Details/>}/>
        </Routes>
          </Provider>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
