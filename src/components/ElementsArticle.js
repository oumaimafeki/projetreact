import {Link } from "react-router-dom";

function ElementsArticle(props) {
    return ( 
<div className="container">
  <div className="row">
{
props.articles.map(article =>{
return(
<div key={article.id} className="card border-dark mb-3" style={{"max-width": "540px;"}}>
<div className="row g-0" >
    <div className="col-md-4" >
    <img src={article.imageartpetitf} class="img-fluid rounded-start" style={{"height":"25", "width":"25"}} alt={article.designation}/>
    </div>
    <div className="col-md-8">
        <div className="card-body">
            <h5 className="card-title">{article.reference}</h5>
            <p className="card-text">{article.marque}</p><hr/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{article.prixVente} TND</li>
            </ul><hr/>
            <Link exact to={`/EditArticle/${article.id}`} className="btn btn-outline-info">Modifier</Link> {' '}
            <button onClick={()=>{props.deleteProd(article.id)}} className="btn btn-outline-danger">Supprimer</button>

        </div>
     </div>
  
    
    </div>
</div>
                )
            })
        }
</div>
</div>
     );
}

export default ElementsArticle;
