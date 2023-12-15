import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import StripeCheckout from 'react-stripe-checkout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const Cart = () => {
  const { cartDetails, removeItem, clearCart, totalPrice, cartCount, incrementItem, decrementItem } = useShoppingCart();
  const navigate = useNavigate();
  const [payment, setPayment] = useState(false);

  const imprimer = () => {
    navigate('/pdfCart');
  };

  const onToken = (token) => {
    console.log(token);
    clearCart();
    navigate('/ListCards');
  };

  const commander = () => {
    setPayment(true);
  };

  const more = () => {
    navigate('/ListCards');
  };

  const clear = () => {
    clearCart();
  };

  const calculateTotalPrice = () => {
    return Object.values(cartDetails).reduce((acc, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      return acc + price * quantity;
    }, 0);
  };

  useEffect(() => {
    // Mettez à jour le prix total à chaque changement dans le panier
    calculateTotalPrice();
  }, [cartDetails]);

  return (
    <div>
      {payment ? (
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51OGGNzBFhmNlwePUAjwaqUwiFQWLTeOFH2Ca326hgzyPeq7iRNQKv5fNtDttvKGSbQtFudTlW1HDWCwNrUzkQfPx00z7XJlH3p"
          amount={totalPrice * 100}
          currency="USD"
        />
      ) : null}
      <Grid container spacing={2} columns={15} marginTop={10} marginLeft={10}>
        <Grid item xs={8}>
          {cartDetails &&
            Object.values(cartDetails).map((item) => {
              return (
                <Grid item xs={8} key={item.id}>
                  <img alt={item.title} style={{ margin: '0 auto', maxHeight: '100px' }} src={item.image} className="img-fluid d-block" />
                  <h5>{item.title}</h5>
                  <p>Prix: {item.price} TND</p>
                  <p>Qté: {item.quantity}</p>
                  <button
                    onClick={() => {
                      if (item.quantity < item.qtestock) {
                        incrementItem(item.id);
                      } else {
                        alert('Quantité stock indisponible');
                      }
                    }}
                  >
                    <AddShoppingCartIcon color="success" />
                  </button>
                  {item.quantity > 1 && (
                    <button onClick={() => decrementItem(item.id)}>
                      <RemoveSharpIcon color="warning" />
                    </button>
                  )}
                  {item.quantity === 1 && (
                    <button onClick={() => removeItem(item.id)}>
                      <RemoveShoppingCartIcon color="error" />
                    </button>
                  )}
                  <hr />
                </Grid>
              );
            })}
        </Grid>
        <Grid item xs={5}>
          <Button color="error" variant="outlined" onClick={more}>
            Ajouter des articles
          </Button>
          <p>Total Articles</p>
          <h4>{cartCount}</h4>
          <p>Total Payement</p>
          <h3>{!isNaN(totalPrice) ? calculateTotalPrice().toFixed(3) : '0.000'} TND</h3>
          <hr />
          <div>
            <Button color="success" variant="outlined" onClick={commander}>
              Commander
            </Button>
            <br />
            <br />
            <Button color="secondary" variant="outlined" onClick={imprimer}>
              Imprimer PDF
            </Button>
            <br />
            <br />
            <Button color="warning" variant="outlined" onClick={clear}>
              Annuler
            </Button>
            <br />
            <br />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
