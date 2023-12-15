import React from "react";
import backgroundImage from "./Home.png";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#000000",
  justifyContent: "space-between",
};

const contentStyle = {
  flex: 1,
};

const footerStyle = {
  padding: "5px",
  color: "#000000",
  backgroundColor: "rgba(167, 131, 158, 0.7)",
  width: "100%",
};

const iconTextStyle = {
  display: "flex",
  alignItems: "center",
  margin: "10px",
};

function Home() {
  return (
    <div style={homeStyle}>
      <div style={contentStyle}>
        <h1>Bienvenue sur notre site .</h1>
        <p>Découvrez notre collection exclusive de parfums de luxe .</p>
      </div>

      <footer style={footerStyle}>
        <h2>SUIVEZ NOUS</h2>
        <div style={iconTextStyle}>
          <FacebookOutlinedIcon />
          <span>Luxury Fragrance</span>
        </div>
       
        <div style={iconTextStyle}>
          <InstagramIcon />
          <span>Luxury_Fragrance</span>
        </div>
        <div style={iconTextStyle}>
          <LocationOnIcon />
          <span>Visit Us: Luxury Fragrance Parfumerie, 2ème étage Centre X, Menzah 9 Tunisia</span>
        </div>
          
        <div style={iconTextStyle}>
          <EmailIcon />
          <span>contact@LuxuryFragrance.tn</span>
        </div>
        <form>
          
        </form>
      </footer>
    </div>
  );
}

export default Home;
