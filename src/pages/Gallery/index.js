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
                <GalleryCard 
                // test items********* image, title, description props
                image="https://lh3.googleusercontent.com/proxy/oNUaNFLUevqJNKwISFstlgBuZx0nNn-qHjl9N2FFDNmER67BiwBw3AnzUoDEUVkIucDyviHcqUfgpIXLJBZwpQuCQ9LxTCuJHiliLw0LnNLW7PUCArKf7Skln_b19sd4aSXFVidLgsfScxZA"
                title="skull"
                description="Painting of skull"
                />
            </Container>
        </>
    )
}
export default Gallery;