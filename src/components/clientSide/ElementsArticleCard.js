import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';

const ElementsArticleCard = (props) => {
  const { cartCount, addItem } = useShoppingCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const addToCart = (product) => {
    const target = {
      id: product.id,
      title: product.designation,
      image: product.imageartpetitf,
      price: product.prixVente,
      qtestock: product.qtestock,
      quantity: 1,
    };
    addItem(target);
    console.log('Item added to cart:', target);
  };

  const searchResults = props.articles.filter((product) =>
    product.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar style={{ backgroundColor: '#ECDCEB', justifyContent: 'space-between' }}>
          <div>
            <Button color="inherit">
              <Link to="/cart">
                {cartCount}
                <ShoppingCartIcon fontSize="large" style={{ color: 'darkmagenta' }} />
              </Link>
            </Button>
          </div>
          <div>
            <form className="d-flex" role="search" style={{ justifyContent: 'space-between' }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-dark" type="button">
                <SearchIcon />
              </button>
            </form>
          </div>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <div className="row">
        {searchResults.map((product) => (
          <article
            className="col-sm-3"
            key={product.id}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="card border-dark mb-3">
              <img src={product.imageartpetitf} className="card-img-top p-5" alt={product.designation} />
              <div className="text-center">
              <div>{product.designation.substr(0, 20)} ... </div>
              <div>Prix : {product.prixVente} TND </div> <br/>
            </div>
            {hoveredProductId === product.id && (
              <div className="text-center">
                <Button
                  color="secondary"
                  variant="outlined"
                  disabled={product.qtestock <= 1}
                  onClick={() => addToCart(product)}
                >
                  Ajouter Au Panier
                </Button> <br/><br/>
              </div>
            )}
            </div>
            
            <br />
          </article>
        ))}
      </div>
    </>
  );
};

export default ElementsArticleCard;
