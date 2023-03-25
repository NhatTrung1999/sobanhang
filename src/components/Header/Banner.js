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
        sx={{ paddingLeft: { xs: "15px" }, paddingRight: { xs: "15px" } }}
      >
        <Box position="relative" flex={2}>
          <Box textAlign="center">
            <img
              src={BannerLogo}
              style={{ maxWidth: "100%", height: "auto" }}
              className="banner-logo"
            />
          </Box>
          <Container>
            <Grid container>
              <Grid item lg={6} md={6}>
                <Box
                  position="absolute"
                  sx={{
                    maxWidth: { xs: "100%", sm: "50%", md: "53%", lg: "25%" },
                    padding: { xs: "10px" },
                    top: { xs: "50%", sm: "1%", md: "3%", lg: "22%" },
                  }}
                >
                  <Box
                    fontSize="60px"
                    lineHeight="65px"
                    color="#fff"
                    marginBottom="30px"
                    sx={{
                      fontSize: { xs: "42px", md: "60px", lg: "60px" },
                      marginBottom: { xs: "0px" },
                      lineHeight: { xs: "50px", md: "65px" },
                    }}
                  >
                    Bán hàng dễ, tiền về nhanh{" "}
                  </Box>
                  <Box
                    fontSize="18px"
                    lineHeight="32px"
                    color="#fff"
                    marginBottom="42px"
                    sx={{
                      marginBottom: { xs: "10px" },
                    }}
                  >
                    Mở website bán hàng, quản lý toàn diện cửa hàng và thu tiền
                    ngay trên điện thoại với Sổ Bán Hàng
                  </Box>
                  <Box>
                    <Grid container spacing={0.5} sx={{ cursor: "pointer" }}>
                      <Grid item>
                        <img src={appstore} width="135" height="40" />
                      </Grid>
                      <Grid item>
                        <img src={playstore} width="135" height="40" />
                      </Grid>
                    </Grid>
                    <Box
                      style={{
                        color: "#fff",
                        fontSize: "15px",
                      }}
                    >
                      Cực DỄ SỬ DỤNG và hoàn toàn MIỄN PHÍ{" "}
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} md={6}>
                <Box
                  position="absolute"
                  sx={{
                    top: { xs: "6%", sm: "4%", md: "-4%", lg: "-4%" },
                    right: { xs: "3%", sm: "10%", md: "19%", lg: "19%" },
                    maxWidth: { xs: "95%", sm: "40%", md: "40%" },
                  }}
                >
                  <img
                    src={bannerHeader}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    className="banner-header"
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
          paddingBottom="65px"
          sx={{ paddingTop: { xs: "45px", md: "90px", lg: "90px" } }}
        >
          <Grid container>
            <Grid item xs={12} sm={8} md={6} lg={6}>
              <Box flex={1}>
                <Box
                  sx={{
                    fontSize: { xs: "26px", md: "36px", lg: "36px" },
                    letterSpacing: { xs: "-1.2px" },
                    fontWeight: { xs: "700", md: "100", lg: "100" },
                    maxWidth: { md: "83%", lg: "83%" },
                  }}
                >
                  Được hơn 400,000+ chủ kinh <br />
                  doanh nhỏ tin dùng sau 1 năm ra mắt
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4} md={6} lg={6}>
              <Box flex="1" display="flex" justifyContent="space-around">
                <Grid container>
                  <Grid item xs={12} md={6} lg={6}>
                    <Box>
                      <Box
                        fontSize="50px"
                        sx={{
                          fontWeight: { xs: "700", md: "100", lg: "100" },
                        }}
                        marginBottom="15px"
                      >
                        30,000+
                      </Box>
                      <Box
                        fontSize="17px"
                        maxWidth="70%"
                        fontWeight="100"
                        sx={{ maxWidth: { xs: "39%", md: "70%", lg: "70%" } }}
                      >
                        Cửa hàng mới mỗi tháng{" "}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <Box>
                      <Box
                        fontSize="50px"
                        sx={{
                          fontWeight: { xs: "700", md: "100", lg: "100" },
                        }}
                        marginBottom="15px"
                      >
                        4.8
                      </Box>
                      <Box fontSize="17px" marginBottom="5px">
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
                      <Box fontSize="17px" fontWeight="100">
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
