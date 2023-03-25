import { Box, Container, Divider, Grid, List, ListItem } from "@mui/material";
import finestore from "../img/finstore.webp";
import thumbnail from "../img/THUMB-1-1024x576-1.webp";
import bank from "../img/hinh-ngan-hang.webp";
import app from "../img/QR.svg";
import appstore from "../img/appstore.png";
import playstore from "../img/playstore.png";
import logo from "../img/cropped-cropped-logo-website.png";
import registered from "../img/logoCCDV-removebg-preview-300x113.png";
import notifitied from "../img/20150827110756-dathongbao-300x114.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PosIcon from "../img/posmachine.svg";
import Stock from "../img/stock.svg";
import Income from "../img/income.svg";
import Order from "../img/order.svg";
import Takecare from "../img/takecare.svg";
import Discount from "../img/discount.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Content() {
  return (
    <>
      <Container>
        <Box
          className="finstore"
          display="flex"
          justifyContent="space-around"
          sx={{
            paddingTop: { xs: "51px", md: "110px", lg: "110px" },
            paddingBottom: { xs: "0px", md: "100px", lg: "100px" },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ marginBottom: { xs: "20px" } }}>
                <img
                  src={finestore}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Box
                sx={{
                  width: { xs: "100%", md: "65%", lg: "65%" },
                  margin: {
                    xs: "0px",
                    md: "0px 85px 0px 120px",
                    ld: "0px 85px 0px 120px",
                  },
                  padding: { xs: "10px", md: "0px", lg: "0px" },
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      fontSize="36px"
                      lineHeight="48px"
                      fontWeight="100"
                      marginBottom="15px"
                      sx={{
                        fontSize: { xs: "28px", md: "36px", lg: "36px" },
                        fontWeight: { xs: "700", md: "100", lg: "100" },
                      }}
                    >
                      Ai cũng có thể tạo web bán hàng online{" "}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      fontSize="19px"
                      color="#7A7A7A"
                      lineHeight="32px"
                      fontWeight="100"
                      marginBottom="39px"
                    >
                      Chủ động tiếp cận hàng triệu khách qua Facebook, Zalo,
                      SMS.. tăng thu nhập
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Box display="flex">
                        <Box marginRight="20px">
                          <i style={{ color: "#0e8740" }}>
                            <CheckCircleIcon
                              sx={{
                                width: "30px",
                                height: "30px",
                              }}
                            />
                          </i>
                        </Box>
                        <Box marginBottom="35px">
                          <Box
                            fontSize="21px"
                            color="#161C2D"
                            marginBottom="10px"
                            lineHeight="1.5238em"
                          >
                            Cửa hàng online của riêng bạn
                          </Box>
                          <Box
                            fontSize="17px"
                            color="#7A7A7A"
                            lineHeight="1.705em"
                            sx={{
                              maxWidth: { xs: "85%", md: "75%", lg: "75%" },
                            }}
                          >
                            Chỉ mất 2 phút để tạo website & sẵn sàng chốt đơn
                            ngay trên điện thoại
                          </Box>
                        </Box>
                      </Box>
                      <Box display="flex">
                        <Box marginRight="20px">
                          <i style={{ color: "#0e8740" }}>
                            <CheckCircleIcon
                              sx={{
                                width: "30px",
                                height: "30px",
                              }}
                            />
                          </i>
                        </Box>
                        <Box marginBottom="35px">
                          <Box
                            fontSize="21px"
                            color="#161C2D"
                            marginBottom="10px"
                            lineHeight="1.5238em"
                          >
                            Giao hàng thu tiền dễ dàng
                          </Box>
                          <Box
                            fontSize="17px"
                            color="#7A7A7A"
                            maxWidth="80%"
                            lineHeight="1.705em"
                            sx={{
                              maxWidth: { xs: "90%", md: "80%", lg: "80%" },
                            }}
                          >
                            Đa dạng đối tác vận chuyển, thu COD, ngân hàng..
                            không phí hoa hồng
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Box
          className="widget"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ paddingTop: { xs: "0", md: "46px", lg: "46px" } }}
          // height="474px"
        >
          <Box marginBottom="50px">
            <Box
              textAlign="center"
              fontSize="36px"
              marginBottom="20px"
              sx={{ fontWeight: { xs: "700", md: "100", lg: "100" } }}
            >
              Thích hợp cho mọi ngành hàng
            </Box>
            <Box
              textAlign="center"
              fontSize="19px"
              maxWidth="600px"
              sx={{ fontWeight: { xs: "400", md: "100", lg: "100" } }}
            >
              Ai cũng có thể dùng SoBanHang từ bán sỉ, bán lẻ, tạp hoá, nông
              sản, thời trang, quán ăn, sữa.. cho tới dịch vụ spa, cắt tóc..
            </Box>
          </Box>
        </Box>
      </Container>

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
      {/* <Box bgcolor="#EAF9ED" width="100%" height="361px"></Box> */}

      <Box bgcolor="#EAF9ED">
        <Container>
          <Box
            className="widget2"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box maxWidth="620px">
              <Box
                fontSize="44px"
                textAlign="center"
                margin="10px 0 77px 0"
                sx={{
                  fontSize: { xs: "36px", md: "44px", lg: "44px" },
                  fontWeight: { xs: "700", md: "100", lg: "100" },
                  marginBottom: {
                    xs: "0",
                    md: "10px 0 77px 0",
                    lg: "10px 0 77px 0",
                  },
                }}
              >
                Quản lý trên điện thoại không cần đầu tư thiết bị
              </Box>
            </Box>

            <Box marginBottom="33px">
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={PosIcon} width="48" height="35.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Máy bán hàng POS
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        Tạo hoá đơn bán hàng, thu tiền nhanh chóng trên điện
                        thoại
                      </p>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={Discount} width="48" height="24.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Quảng cáo, khuyến mãi
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        Tạo mã giảm giá và quảng cáo để thu hút khách hàng và dễ
                        dàng chốt đơn
                      </p>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={Takecare} width="48" height="42.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Chăm sóc khách hàng
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        Tự động lưu thông tin khách, lịch sử mua hàng, tích điểm
                        thành viên..
                      </p>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={Order} width="48" height="49.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Đặt bàn, đặt trước
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        Các quán ăn, quán spa.. lên đơn , giữ chỗ dễ dàng không
                        sợ nhầm lẫn
                      </p>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={Stock} width="48" height="55.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Hàng hoá, tồn kho
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        In / quét mã vạch, theo dõi nhập, xuất không lo thiếu
                        hàng, thất thoát
                      </p>
                    </Box>
                  </Box>
                </Grid>

                <Grid item lg={4} md={4} sm={4}>
                  <Box display="flex" padding="10px">
                    <span
                      style={{
                        marginRight: "13px",
                        marginTop: "13px",
                      }}
                    >
                      <i>
                        <img src={Income} width="48" height="55.15" />
                      </i>
                    </span>
                    <Box>
                      <Box
                        fontSize="21px"
                        fontWeight="700"
                        marginBottom="13px"
                        lineHeight="1.5238em"
                      >
                        Sổ sách thu chi
                      </Box>
                      <p
                        style={{
                          fontSize: "17px",
                          fontWeight: "400",
                          lineHeight: "1.705em",
                        }}
                      >
                        Không phải mất công tổng hợp số liệu cuối ngày. Thu chi,
                        lãi lỗ biết liền
                      </p>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              marginTop="100px"
              marginBottom="110px"
              display="flex"
              alignItems="center"
              sx={{
                marginBottom: { xs: "45px", md: "110px", lg: "110px" },
                marginTop: { xs: "30px", md: "100px", lg: "100px" },
              }}
            >
              <Box
                style={{ fontSize: "17px", marginRight: "15px" }}
                sx={{ fontWeight: { xs: "700", md: "100", lg: "100" } }}
              >
                Xem thêm các tính năng PRO
              </Box>
              <Box>
                <ArrowForwardIcon sx={{ height: "24px" }} />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Box className="widget3" marginTop="60px" marginBottom="100px">
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: { sm: "center", md: "center" } }}
          >
            <Grid item lg={6} sx={{ order: { xs: "2", md: "1", lg: "1" } }}>
              <Box
                sx={{
                  margin: {
                    xs: "0px",
                    md: "0 67px 0 83px",
                    lg: "0 67px 0 83px",
                  },
                }}
              >
                <Box
                  fontSize="36px"
                  lineHeight="48px"
                  marginBottom="15px"
                  sx={{
                    fontSize: { xs: "28px", md: "36px", lg: "36px" },
                    fontWeight: { xs: "700", md: "100", lg: "100" },
                  }}
                >
                  Thu tiền về nhanh, không lo thiếu vốn
                </Box>
                <Box
                  fontSize="19px"
                  lineHeight="32px"
                  color="#7A7A7A"
                  marginBottom="16px"
                  maxWidth="85%"
                  sx={{
                    fontWeight: { xs: "400", md: "100", lg: "100" },
                  }}
                >
                  Nhận thanh toán thẻ, chuyển khoản, thu COD, QR.. tiền về tài
                  khoản ngay lập tức.
                </Box>
                <Box>
                  <Box display="flex" marginBottom="35px">
                    <Box marginRight="20px">
                      <i style={{ color: "#0e8740" }}>
                        <CheckCircleIcon
                          sx={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </i>
                    </Box>
                    <Box>
                      <Box
                        fontSize="21px"
                        marginBottom="10px"
                        sx={{
                          fontWeight: { xs: "700", md: "100", lg: "100" },
                        }}
                      >
                        Mã QR cho từng đơn hàng
                      </Box>
                      <Box
                        fontSize="17px"
                        color="#7A7A7A"
                        sx={{
                          fontWeight: { xs: "400", md: "100", lg: "100" },
                        }}
                      >
                        Không lo nhập sai số tài khoản, chia sẻ biến động số dư
                        cho nhân viên bán hàng
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex">
                    <Box marginRight="20px">
                      <i style={{ color: "#0e8740" }}>
                        <CheckCircleIcon
                          sx={{
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </i>
                    </Box>
                    <Box>
                      <Box
                        fontSize="21px"
                        marginBottom="10px"
                        sx={{
                          fontWeight: { xs: "700", md: "100", lg: "100" },
                        }}
                      >
                        Sổ nợ thông minh
                      </Box>
                      <Box
                        fontSize="17px"
                        color="#7A7A7A"
                        sx={{
                          fontWeight: { xs: "400", md: "100", lg: "100" },
                        }}
                      >
                        Tự động nhắc nợ miễn phí qua SMS, Zalo.. thu tiền nhanh
                        gấp 3 lần bình thường
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6} sx={{ order: { xs: "1", md: "2", lg: "2" } }}>
              <Box>
                <img src={bank} width="100%" height="auto" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container>
        <Box className="App">
          {/* <Grid container> */}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              lineHeight="1.25em"
              sx={{
                color: { xs: "#372E52" },
                fontSize: { xs: "44px", md: "55px", lg: "55px" },
                fontWeight: { xs: "700", md: "100", lg: "100" },
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
                maxWidth: { xs: "90%", md: "572px", lg: "572px" },
              }}
            >
              Cùng hơn <b>400,000+</b> các tiểu thương, chủ cửa hàng đã và đang
              bán hàng dễ dàng và thu tiền nhanh chóng hàng ngày
            </Box>
            {/* <Grid item lg={12}> */}
            <Box>
              <img src={app} width="211" height="254" />
            </Box>
            {/* </Grid> */}
            <Box marginTop="20px" sx={{ textAlign: { xs: "center" } }}>
              <Grid container spacing={0.5} sx={{ cursor: "pointer" }}>
                <Grid item lg={6} xs={12}>
                  <img
                    src={appstore}
                    style={{ maxWidth: "100%", height: "auto" }}
                    width="178"
                    height="53"
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <img
                    src={playstore}
                    style={{ maxWidth: "100%", height: "auto" }}
                    width="178"
                    height="53"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* </Grid> */}
        </Box>
      </Container>

      <Container>
        <Box className="widget4" marginTop="115px" marginBottom="50px">
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <Box width="85%" marginRight="58px" padding="10px">
                <Box marginBottom="36px" sx={{ cursor: "pointer" }}>
                  <img src={logo} width="118" height="29.31" />
                </Box>
                <Box fontSize="15px" marginBottom="38px">
                  <p>
                    Ứng dụng quản lý kinh doanh bỏ túi phổ biến #1 Việt Nam dành
                    cho chủ kinh doanh và cửa hàng nhỏ{" "}
                  </p>
                </Box>
                <Box color="#7D818D">
                  <Grid container spacing={2} sx={{ cursor: "pointer" }}>
                    <Grid item>
                      <span className="social">
                        <LinkedInIcon />
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="social">
                        <FacebookIcon />
                      </span>
                    </Grid>
                    <Grid item>
                      <span className="social">
                        <YouTubeIcon />
                      </span>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={2} xs={12} sm={3}>
              <Box fontSize="15px">
                <List sx={{ padding: "0" }}>
                  <ListItem sx={{ fontWeight: "400" }}>Công ty</ListItem>
                  <ListItem className="item">Giới thiệu</ListItem>
                  <ListItem className="item">Tin tức</ListItem>
                  <ListItem className="item">Tuyển dụng</ListItem>
                  <ListItem className="item">Liên hệ</ListItem>
                </List>
              </Box>
            </Grid>

            <Grid item lg={2} xs={12} sm={3}>
              <Box fontSize="15px">
                <List sx={{ padding: "0" }}>
                  <ListItem sx={{ fontWeight: "400" }}>Sản phẩm</ListItem>
                  <ListItem className="item">SoBanHangPro</ListItem>
                  <ListItem className="item">Cộng đồng Chợ sổ</ListItem>
                </List>
              </Box>
            </Grid>

            <Grid item lg={2} xs={12} sm={3}>
              <Box fontSize="15px">
                <List sx={{ padding: "0" }}>
                  <ListItem sx={{ fontWeight: "400" }}>Hướng dẫn</ListItem>
                  <ListItem className="item">Bắt đầu sử dụng</ListItem>
                  <ListItem className="item">Hướng dẫn tính năng</ListItem>
                  <ListItem className="item">Thư viện</ListItem>
                  <ListItem className="item">Giáo Sư Sổ</ListItem>
                  <ListItem className="item">Xóa nền hình ảnh</ListItem>
                </List>
              </Box>
            </Grid>

            <Grid item lg={2} xs={12} sm={3}>
              <Box fontSize="15px">
                <List sx={{ padding: "0" }}>
                  <ListItem sx={{ fontWeight: "400" }}>Chính sách</ListItem>
                  <ListItem className="item">Bảo mật thông tin</ListItem>
                  <ListItem className="item">Điều khoản sử dụng</ListItem>
                  <ListItem className="item">Chính sách bán hàng</ListItem>
                  <ListItem className="item">Chính sách Thanh Toán</ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

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
              © 2022 – SoBanHang được phát triển bởi Công ty TNHH Finan.{" "}
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
                    <img src={registered} width="93" height="35" />
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <img src={notifitied} width="93" height="35" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Content;
