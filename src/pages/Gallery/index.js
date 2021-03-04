import React from 'react'
import "./style.css"
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import GalleryCard from '../../components/GalleryCard';

function Gallery() {
    return (
        <>
            <Grid container justify="center" >
                <Grid  >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.postimg.cc/QxFcFP9S/mt.jpg"
                        title="Misty Mountain Tops"
                        description="I'm packing my bags for the Misty Mountains"
                    />
                    {/* </Container> */}
                </Grid>
                <Grid  >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.postimg.cc/yxVvqTvt/water.jpg"
                        title="Water Scene"
                        description="Bob Ross vibes"
                    />
                    {/* </Container> */}
                </Grid>
                <Grid >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.ibb.co/1MjNdhw/tree.jpg[/img"
                        title="Tree of Fire"
                        description="This tree is on fiiiiiiiiirreee"
                    />
                    {/* </Container> */}
                </Grid>
            </Grid>
            <Grid container justify="center" >
                <Grid  >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.ibb.co/MM9KSPR/moto.jpg"
                        title="Sick Hog"
                        description="Two riders, one gas tank"
                    />
                    {/* </Container> */}
                </Grid>
                <Grid  >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.ibb.co/LvyTG4m/wolf.jpg"
                        title="Wolf Pack"
                        description="When the snows fall and the white winds blow, the lone wolf dies but the pack survives."
                    />
                    {/* </Container> */}
                </Grid>
                <Grid >
                    {/* <Container className="container"> */}
                    <GalleryCard
                        // test items********* image, title, description props
                        image="https://i.ibb.co/ZJVbjH0/u2.jpg"
                        title="Running to Stand Still"
                        description="This one is self explanatory"
                    />
                    {/* </Container> */}
                </Grid>
            </Grid>
        </>
    )
}
export default Gallery;