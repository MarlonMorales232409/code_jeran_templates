import Image from "next/image"
import { Box, Button, Container, Grid, Typography } from '@mui/material'

export const HeroView = () => {
    return (
        <Container sx={{ position: { md: "relative" }, mt: { xs: 5, md: 20 }, py: { md: 30 } }} className="hero-container">
            <Grid container justifyContent={"center"} alignItems={"end"} spacing={11} sx={{ position: { md: "absolute", top: "-270px" } }}>
                <Grid
                    xs={12}
                    md={6}
                    item
                    display="flex"
                    justifyContent={"end"}
                >
                    {/* <div className="hero-img"> */}
                    <Image src="/assets/hero-card.jpg" objectFit="cover" width={480} height={600} alt="hero-card" style={{ borderRadius: "5px" }} className="hero-img" />
                    {/* </div> */}
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    item
                >
                    <Typography variant="body2" fontSize={18} mb={2} color={"info.main"} sx={{ letterSpacing: "1px", textShadow: "0px 1px 3px #ffc578" }}>One of the prevalent illnesses today is food poisoning</Typography>
                    <Typography variant="body2" fontSize={18} mb={2} color={"info.main"} sx={{ letterSpacing: "1px", textShadow: "0px 1px 3px #ffc578" }}>it starts as a slight disconmfort a few hors after eating and</Typography>
                    <Typography variant="body2" fontSize={18} mb={2} color={"info.main"} sx={{ letterSpacing: "1px", textShadow: "0px 1px 3px #ffc578" }}>grows into a life- thretening apisodes requiring</Typography>
                    <Typography variant="body2" fontSize={18} mb={4} color={"info.main"} sx={{ letterSpacing: "1px", textShadow: "0px 1px 3px #ffc578" }}>hospitalization</Typography>
                    <Button variant="outlined" sx={{ width: "200px", mb: 10 }}>
                        Shop Now
                    </Button>
                </Grid>
            </Grid >

        </Container>
    )
}
