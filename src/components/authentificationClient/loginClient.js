import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { signInWithEmailAndPassword, sendPasswordResetEmail} from
"firebase/auth";
import {auth} from "../../FireConfig";
import { Link, useNavigate } from 'react-router-dom';
const LoginClient = () => {
    const style ={
        color : '#A77FAC'
    };
const navigate=useNavigate();
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const handleSubmit = (e) => {
e.preventDefault();
console.log(`submitted email: 
${email} password: ${password}`);
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
const user = userCredential.user;
console.log(user);
navigate("/ListCards")
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(errorCode, errorMessage);
alert(errorMessage);
});
}
const forgotPass=()=>{
    if(email){
    sendPasswordResetEmail(auth, email)
    .then(() => {
    console.log("Password reset email sent!") 
    })
    .catch((error) => {
    console.log(error);
    });
    }
    else
    alert ('Type your Email');
    }
    
return (
<Container component="main" maxWidth="xs">
<Box

    sx={{
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:"solid 2px gray",
    padding:"40px",
    width: "470px",
    color: '#4F4D4F'
    
    }}
>
<Typography component="h1" variant="h5" style={style}>
Déjà Inscrit ?
</Typography>
<Box component="form" onSubmit={handleSubmit} noValidate   sx={{ mt: 1
}}>
<TextField 
margin="normal"
required
fullWidth
id="email"
label={<EmailIcon style={style}/>}
name="email"
autoComplete="email"
autoFocus
onChange={({ target }) =>
setEmail(target.value)}
/>
<TextField 
margin="normal"
required
fullWidth
name="password"
label={ <PasswordIcon style={style}/>}
type="password"
id="password"
autoComplete="current-password"
onChange={({ target}) =>
setPassword(target.value)}
/>
<Button
style={{backgroundColor : '#772072'}}
type="submit"
fullWidth
variant="contained"
onClick={(event)=>handleSubmit(event)}

>
Acceder à mon compte
</Button>
<Grid container>
<Grid item xs>
<Link onClick={()=>forgotPass()} style={style}>
Vous avez oublié votre mot de passe ?</Link>
<hr />
<span>
<Typography component="h1" variant="h5" style={style}>Nouvelle inscription ? </Typography><br/>Créez un compte sur Luxury Fragrance pour commander et accéder
    simplement à l'ensemble de nos services personnalisés
 </span>
 
 <Grid item >
<Link to="/signup" style={style}>
Créer Votre Compte </Link>
</Grid>
 
</Grid>

</Grid>
</Box>
</Box>
</Container>
)
};
export default LoginClient;