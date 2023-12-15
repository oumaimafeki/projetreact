import axios from 'axios';
import {useEffect,useState} from 'react';
import ElementsClient from './ElementsClient';
function ListClients() {
    const style ={
        color :' #11217C'
    };
const[clients,setClients]=useState([]);
useEffect(() => {
axios.get("http://localhost:3001/clients")
.then((response)=>setClients(response.data));
}, []);
const deleteuser = async (id) => {
if (!window.confirm("Are you sure you want to delete")) {
return;
}
axios.delete('http://localhost:3001/clients/' + id)
.then(() => {
console.log('successfully deleted!')
setClients(prevClients => prevClients.filter((client) =>
client.id !== id));
}).catch((error) => {
console.log(error)
})
}
return ( 
<>
<center><i><h2 style={style}>Liste des clients </h2></i></center>
<ElementsClient clients={clients} deleteuser={deleteuser}/>
</>
);
}
export default ListClients;
