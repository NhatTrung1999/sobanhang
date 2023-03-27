import { Container, Box, Grid, Divider } from "@mui/material";
import registered from "../../img/logoCCDV-removebg-preview-300x113.png";
import notifitied from "../../img/20150827110756-dathongbao-300x114.png";

function Widget8() {
    return (
        <Container>
            <Divider />

            <Box className="footer" marginTop="20px" height="94px">
                <Box
                    paddingLeft="10px"
                    paddingRight="10px"
                    display="flex"
                    justifyContent="space-between"
                    sx={{ flexDirection: { xs: "column" } }}
                >
                    <Box
                        fontSize="15px"
                        color="#2C302D"
                        sx={{ textAlign: { xs: "center", md: "left" } }}
                    >
                        © 2022 – SoBanHang được phát triển bởi Công ty TNHH
                        Finan.{" "}
                    </Box>
                    <Box>
                        <Grid
                            container
                            spacing={2}
                            justifyContent="flex-end"
                            sx={{ cursor: "pointer" }}
                        >
                            <Grid item>
                                <Box>
                                    <img
                                        src={registered}
                                        width="93"
                                        height="35"
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <img
                                        src={notifitied}
                                        width="93"
                                        height="35"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Widget8;
