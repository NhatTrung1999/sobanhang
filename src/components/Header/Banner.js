import { Box, Container, Grid } from "@mui/material";
import BannerLogo from "../../img/BG_Banner.webp";
import bannerHeader from "../../img/Banner-header-img_04-min-_1_.webp";
import appstore from "../../img/appstore.png";
import playstore from "../../img/playstore.png";
import StarIcon from "@mui/icons-material/Star";

function Banner() {
    return (
        <Box>
            <Box
                display="flex"
                justifyContent="center"
                paddingLeft="40px"
                paddingRight="40px"
            >
                <Box position="relative">
                    <img
                        src={BannerLogo}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                    <Container>
                        <Grid container>
                            <Grid item lg={6} sx={{ display: { xs: "none" } }}>
                                <Box
                                    position="absolute"
                                    top="22%"
                                    maxWidth="29%"
                                >
                                    <Box
                                        fontSize="60px"
                                        lineHeight="65px"
                                        color="#fff"
                                        marginBottom="30px"
                                    >
                                        Bán hàng dễ, tiền về nhanh{" "}
                                    </Box>
                                    <Box
                                        fontSize="18px"
                                        lineHeight="32px"
                                        color="#fff"
                                        marginBottom="42px"
                                    >
                                        Mở website bán hàng, quản lý toàn diện
                                        cửa hàng và thu tiền ngay trên điện
                                        thoại với Sổ Bán Hàng
                                    </Box>
                                    <Box>
                                        <Grid container spacing={0.5}>
                                            <Grid item>
                                                <img
                                                    src={appstore}
                                                    width="135"
                                                    height="40"
                                                />
                                            </Grid>
                                            <Grid item>
                                                <img
                                                    src={playstore}
                                                    width="135"
                                                    height="40"
                                                />
                                            </Grid>
                                        </Grid>
                                        <p
                                            style={{
                                                color: "#fff",
                                                fontSize: "15px",
                                            }}
                                        >
                                            Cực DỄ SỬ DỤNG và hoàn toàn MIỄN PHÍ{" "}
                                        </p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6}>
                                <Box
                                    position="absolute"
                                    top="-23px"
                                    right="176px"
                                >
                                    <img
                                        src={bannerHeader}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto",
                                        }}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Container>
                <Box
                    display="flex"
                    justifyContent="space-evenly"
                    paddingTop="90px"
                    paddingBottom="65px"
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <Box flex={1}>
                                <Box
                                    fontSize="36px"
                                    fontWeight="700"
                                    sx={{
                                        fontSize: { xs: "26px" },
                                        letterSpacing: { xs: "-1.2px" },
                                    }}
                                >
                                    Được hơn 400,000+ chủ kinh <br />
                                    doanh nhỏ tin dùng sau 1 năm ra mắt
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box
                                flex="1"
                                display="flex"
                                justifyContent="space-around"
                            >
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Box
                                                fontSize="50px"
                                                fontWeight={700}
                                                marginBottom="15px"
                                            >
                                                30,000+
                                            </Box>
                                            <Box
                                                fontSize={17}
                                                maxWidth="70%"
                                                fontWeight="100"
                                                sx={{ maxWidth: { xs: "39%" } }}
                                            >
                                                Cửa hàng mới mỗi tháng{" "}
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Box>
                                            <Box
                                                fontSize={50}
                                                fontWeight={700}
                                                marginBottom="15px"
                                            >
                                                4.8
                                            </Box>
                                            <Box
                                                fontSize={17}
                                                marginBottom="5px"
                                            >
                                                <i style={{ color: "#F5A623" }}>
                                                    <StarIcon fontSize="small" />
                                                </i>
                                                <i style={{ color: "#F5A623" }}>
                                                    <StarIcon fontSize="small" />
                                                </i>
                                                <i style={{ color: "#F5A623" }}>
                                                    <StarIcon fontSize="small" />
                                                </i>
                                                <i style={{ color: "#F5A623" }}>
                                                    <StarIcon fontSize="small" />
                                                </i>
                                                <i style={{ color: "#F5A623" }}>
                                                    <StarIcon fontSize="small" />
                                                </i>
                                            </Box>
                                            <Box fontSize={17} fontWeight="100">
                                                12,380 đánh giá
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Banner;
