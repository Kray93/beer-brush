import { React } from "react";
import Navbar from "../../components/Navbar";
import ContainedButtons from "../../components/HomeButtons/"
import "./style.css";
import Grid from "@material-ui/core/Grid";



function Home() {
    return(
        <>
        <Navbar/>
            <Grid container justify = "center" >
                <img className= "mainImg" src= "https://i.ytimg.com/vi/SrQf0214Hdg/maxresdefault.jpg" alt="pic"/>
            </Grid>
        <ContainedButtons/>
        </>
    )
}
export default Home;