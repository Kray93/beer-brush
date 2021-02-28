import React from 'react'
import "./style.css"
import Navbar from '../../components/Navbar'
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import GalleryCard from '../../components/GalleryCard';

function Gallery() {
    return (
        <>
            <Navbar />
            <Container className="container">
                <GalleryCard/>
            </Container>
        </>
    )
}
export default Gallery;