import {Link } from "react-router-dom";

function ElementsClient(props) {
    return ( 
        <centre>
<div className="container">
  <div className="row">
        {
        props.clients.map(client =>{
        return(
        <div key={client.id}  style={{"max-width": "540px;"}}>
        <div className="row g-0" >
        {/* <div className="col-md-4" >
            <img src={article.imageartpetitf} class="img-fluid rounded-start" style={{"height":"25", "width":"25"}} alt={article.designation}/>
        </div>*/}
            <div className="col-md-8">
                
            <table class="table table-sm table-secondary">
                <thead>
                    <tr>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col">Nom </th>
                    <th scope="col">Prenom </th>
                    <th scope="col">Adresse </th>
                    <th scope="col"> n° Tel </th>
                    <th></th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                    {/* <td>{client.id}</td> */}
                    <td>{client.nom}</td>
                    <td>{client.prenom}</td>
                    <td>{client.adresse}</td>
                    <td>{client.tel}</td>
                    <td><center><Link exact to={`/EditClient/${client.id}`} className="btn btn-outline-primary">Modifier</Link>{' '}
                    <button onClick={()=>{props.deleteuser(client.id)}} className="btn btn-outline-danger">Supprimer</button></center></td>
                    </tr>
                
                    </tbody>
            </table>
            

                </div>
            </div>
        
            
            </div>

                        )
                    })
                }
        </div>
        </div>
        </centre> 
            );
}

export default ElementsClient;
