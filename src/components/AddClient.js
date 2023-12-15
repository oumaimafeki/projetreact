import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddClient() {
const navigate=useNavigate();
const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [adresse, setAdresse] = useState("");
const [tel, setTel] = useState("");
const handleSubmit = (e) => {
e.preventDefault();
const newUser = {
nom,
prenom,
adresse,
tel
};
//faire le add dans la BD
axios.post("http://localhost:3001/clients",newUser)
.then(res => { 
console.log(res);
navigate("/clients")
}) 
.catch(error=>{
console.log(error)
alert("Erreur ! Insertion non effectuée")
})
}
return ( 
<div className="container">
<h2>Ajout d'un client </h2>
<form onSubmit={handleSubmit}>
<div className="grid gap-3">
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="Nom"
type="text"
value={nom}
onChange={e => setNom(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="Prenom"
name="prenom"
type="text"
value={prenom}
onChange={e => setPrenom(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="adresse"
type="text"
value={adresse}
onChange={e => setAdresse(e.target.value)}
/>
</div>
<div className="col-sm-5 p-2 g-col-6">
<input className="form-control"
placeholder="n° Tel"
type="text"
value={tel}
onChange={e => setTel(e.target.value)}
/>
</div>
<div>
<button className="btn btn-outline-success">Valider</button>
</div>
</div>
</form>
</div>
);
}
export default AddClient;

