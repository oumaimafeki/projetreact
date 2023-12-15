
import ListArticles from './components/ListArticles';
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import EditClient from './components/EditClient';
import AddClient from './components/AddClient';
import ListClients from './components/ListClients';
import Home from './components/Home';

import ListCards from './components/clientSide/ListCards';
import Cart from "./components/clientSide/Cart";
import { CartProvider } from "use-shopping-cart";
import PdfCart from "./components/clientSide/PdfCart";
import ElementsArticleCard from './components/clientSide/ElementsArticleCard';
import Menu from './Menu';
import Loginclient from './components/authentificationClient/loginClient';
import Signup from "./components/authentificationClient/Signup";
// import Admin from "./components/Admin";

import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
function App() {
  return(
    <CartProvider>

    <Router>
      <Menu />
      <Routes>
        <Route path='/articles' element={<ListArticles />}/>
        <Route exact  path='/'element={<Home />}/>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        
         <Route path='/editArticle/:id' element={<EditArticle/>}/>
        
         <Route path='/clients' element={<ListClients />}/> 
         <Route path='/editClient/:id' element={<EditClient/>}/>

         <Route path='/AddClient' element={<AddClient/>}/>
         
         <Route path='/ListCards' element={<ListCards/>}/>
         <Route path='/ElementArticleCard' element={<ElementsArticleCard/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/pdfCart' element={<PdfCart/>}/>
         <Route path="/loginclient" exact element={<Loginclient/>}/>
         <Route path="/signup" exact element={<Signup/>}/>
            
      </Routes>
    </Router>
     </CartProvider>

  );

}
export default App;
