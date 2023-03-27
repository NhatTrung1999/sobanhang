import { Container, Box, Grid } from "@mui/material";

import app from "../../img/QR.svg";
import appstore from "../../img/appstore.png";
import playstore from "../../img/playstore.png";

function Widget6() {
    return (
        <Container>
            <Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box
                        lineHeight="1.25em"
                        sx={{
                            color: { xs: "#372E52" },
                            fontSize: {
                                xs: "44px",
                                md: "55px",
                                lg: "55px",
                            },
                            fontWeight: {
                                xs: "700",
                                md: "100",
                                lg: "100",
                            },
                            textAlign: { xs: "center" },
                            maxWidth: { xs: "70%" },
                        }}
                    >
                        Tải về ngay. MIỄN PHÍ
                    </Box>
                    <Box
                        fontSize="18px"
                        lineHeight="1.55em"
                        marginTop="23px"
                        marginBottom="45px"
                        textAlign="center"
                        fontWeight="400"
                        color="#372E52"
                        sx={{
                            maxWidth: {
                                xs: "90%",
                                md: "572px",
                                lg: "572px",
                            },
                        }}
                    >
                        Cùng hơn <b>400,000+</b> các tiểu thương, chủ cửa hàng
                        đã và đang bán hàng dễ dàng và thu tiền nhanh chóng hàng
                        ngày
                    </Box>

                    <Box>
                        <img src={app} width="211" height="254" />
                    </Box>

                    <Box marginTop="20px" sx={{ textAlign: { xs: "center" } }}>
                        <Grid
                            container
                            spacing={0.5}
                            sx={{ cursor: "pointer" }}
                        >
                            <Grid item lg={6} xs={12}>
                                <img
                                    src={appstore}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                    width="178"
                                    height="53"
                                />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <img
                                    src={playstore}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto",
                                    }}
                                    width="178"
                                    height="53"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Widget6;
