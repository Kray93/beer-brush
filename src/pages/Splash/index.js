import { Container } from "@material-ui/core";
import React from "react";
import "./style.css";
import SplashColumn from '../../components/SplashColumn';

function Splash() {
  return (
    <Container>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "5%"
        }}
      >
        
        <h1>Welcome to Artisan's Lounge</h1>
        <p className="about">
          We are commited to teaching those who want to learn to any art! We
          offer at-your-leisure classes so you dont have to stress about missing
          a class. Register as an instructor to add coarses or register as an
          aspiring artist and join any class related to your passion!
        </p>

        <p>Register and Login to learn more!</p>

        <SplashColumn />
      </div>


    </Container>
  );
}



export default Splash;
