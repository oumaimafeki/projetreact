import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsArticle from './ElementsArticle';
function ListArticles() {
    const style ={
        color:'#6D3560'

    };
const[articles,setArticles]=useState([]);
useEffect(() => {
axios.get("http://localhost:3001/produit")
.then((response)=>setArticles(response.data));
}, []);
const deleteProd = async (id) => {
if (!window.confirm("Are you sure you want to delete")) {
return;
}
axios.delete('http://localhost:3001/produit/' + id)
.then(() => {
console.log('successfully deleted!')
setArticles(prevArticles => prevArticles.filter((article) =>
article.id !== id));
}).catch((error) => {
console.log(error)
})
}
return ( 
<>
<center><i><h2 style={style}>Liste des articles </h2></i></center> <br/>
<ElementsArticle articles={articles} deleteProd={deleteProd}/>
</>
);
}
export default ListArticles;