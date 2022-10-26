import { Box, Button, Typography } from "@mui/material"


export const HomeView = () => {
    return (
        <Box className="bg-image" justifyContent="center" alignItems="center">
            <Box width={"100%"} height={"100%"} display="flex" justifyContent={"center"} alignItems="center" flexDirection={"column"} >
                <Typography
                    sx={{ fontSize: { xs: "8rem", md: "10rem" } }}
                    variant="h1"
                    color="#87431D"
                    className="title"
                    fontFamily={"DM Serif Display"}
                    fontWeight="400"
                >
                    <span>discover</span>
                    cof<span>fee</span>
                </Typography>
                <Typography variant="body1" color={"info.main"} sx={{ textShadow: "0px 0px 2px #ffffff", textAlign: "center" }}>
                    Herbs are fun and easy to grow. when hervested they make even the simplest metal seem
                </Typography>
                <Typography variant="body1" color={"info.main"} sx={{ textShadow: "0px 0px 2px #ffffff" }}>
                    Like a gourmet delight. By using herbs in your cooking
                </Typography>
                <Button variant="outlined" size="large" sx={{ mt: 5, color: "#000" }} className="button">
                    Shop Now
                </Button>
            </Box>
        </Box >
    )
}
