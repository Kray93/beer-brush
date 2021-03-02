import { React, useEffect } from "react";
import Navbar from "../../components/Navbar";
import HomeButtons from "../../components/HomeButtons/"
import "./style.css";
import Grid from "@material-ui/core/Grid";
import {checkUser} from '../../helper/index'
import { useHistory } from "react-router-dom";
import red from '@material-ui/core/colors/red';

function Home() {
    const history = useHistory();
    useEffect(()=>{
        if (!checkUser()) {
            history.push("/login")
        }
    },[])

    return(
        <>
        <Navbar/>
            <Grid container justify = "center" >
                <img className= "mainImg" src= "https://i.ytimg.com/vi/SrQf0214Hdg/maxresdefault.jpg" alt="pic"/>
            </Grid>
        <HomeButtons/>
        </>
    )
}
export default Home;