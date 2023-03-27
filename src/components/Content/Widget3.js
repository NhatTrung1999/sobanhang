import { Container, Box } from "@mui/material";
import thumbnail from "../../img/THUMB-1-1024x576-1.webp";

function Widget3() {
    return (
        <Container sx={{ position: "relative" }}>
            <Box
                padding="10px"
                // position="absolute"
                // sx={{ top: { lg: "337%", md: "202%", xs: "202%" } }}
            >
                {" "}
                {/*height="25vh"*/}
                <Box display="flex" justifyContent="center">
                    <img
                        src={thumbnail}
                        style={{ borderRadius: "20px" }}
                        width="100%"
                        height="auto"
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Widget3;
