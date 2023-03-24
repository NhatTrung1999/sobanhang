import { Box, Divider, Grid, List, ListItem } from "@mui/material";
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
      <Box
        className="finstore"
        paddingTop="110px"
        paddingBottom="100px"
        display="flex"
        justifyContent="space-around"
      >
        <Box>
          <img src={finestore} style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
        <Box width="50%" margin="0px 85px 0px 120px">
          <Box
            fontSize="36px"
            lineHeight="48px"
            fontWeight="100"
            marginBottom="15px"
          >
            Ai cũng có thể tạo web bán hàng online{" "}
          </Box>
          <Box
            fontSize="19px"
            color="#7A7A7A"
            lineHeight="32px"
            fontWeight="100"
            marginBottom="39px"
          >
            Chủ động tiếp cận hàng triệu khách qua Facebook, Zalo, SMS.. tăng
            thu nhập
          </Box>
          <Box>
            <Box display="flex">
              <Box marginRight="20px">
                <i style={{ color: "#0e8740" }}>
                  <CheckCircleIcon sx={{ width: "30px", height: "30px" }} />
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
                <p
                  style={{
                    fontSize: "17px",
                    color: "#7A7A7A",
                    maxWidth: "75%",
                    lineHeight: "1.705em",
                  }}
                >
                  Chỉ mất 2 phút để tạo website & sẵn sàng chốt đơn ngay trên
                  điện thoại
                </p>
              </Box>
            </Box>
            <Box display="flex">
              <Box marginRight="20px">
                <i style={{ color: "#0e8740" }}>
                  <CheckCircleIcon sx={{ width: "30px", height: "30px" }} />
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
                <p
                  style={{
                    fontSize: "17px",
                    color: "#7A7A7A",
                    maxWidth: "80%",
                    lineHeight: "1.705em",
                  }}
                >
                  Đa dạng đối tác vận chuyển, thu COD, ngân hàng.. không phí hoa
                  hồng
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        className="widget"
        display="flex"
        flexDirection="column"
        alignItems="center"
        paddingTop="46px"
      >
        <Box marginBottom="50px">
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Thích hợp cho mọi ngành hàng
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "19px",
              maxWidth: "600px",
            }}
          >
            Ai cũng có thể dùng SoBanHang từ bán sỉ, bán lẻ, tạp hoá, nông sản,
            thời trang, quán ăn, sữa.. cho tới dịch vụ spa, cắt tóc..
          </p>
        </Box>
      </Box>

      <Box padding="10px" height="25vh">
        <Box display="flex" justifyContent="center">
          <img src={thumbnail} style={{ borderRadius: "20px" }} />
        </Box>
      </Box>
      <Box bgcolor="#EAF9ED" width="100%" height="361px"></Box>

      <Box
        className="widget2"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="#EAF9ED"
      >
        <Box maxWidth="620px">
          <h2
            style={{
              fontSize: "44px",
              textAlign: "center",
              margin: "10px 0 77px 0",
            }}
          >
            Quản lý trên điện thoại không cần đầu tư thiết bị
          </h2>
        </Box>
        <Box marginBottom="33px">
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
                    Tạo hoá đơn bán hàng, thu tiền nhanh chóng trên điện thoại
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
                    Các quán ăn, quán spa.. lên đơn , giữ chỗ dễ dàng không sợ
                    nhầm lẫn
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
                    In / quét mã vạch, theo dõi nhập, xuất không lo thiếu hàng,
                    thất thoát
                  </p>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4}>
              <Box display="flex" padding="10px">
                <span style={{ marginRight: "13px", marginTop: "13px" }}>
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
                    Không phải mất công tổng hợp số liệu cuối ngày. Thu chi, lãi
                    lỗ biết liền
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
        >
          <Box style={{ fontSize: "17px", marginRight: "15px" }}>
            Xem thêm các tính năng PRO
          </Box>
          <Box>
            <ArrowForwardIcon sx={{ height: "24px" }} />
          </Box>
        </Box>
      </Box>

      <Box className="widget3" marginTop="60px" marginBottom="100px">
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box marginLeft="83px" marginRight="67px">
              <Box fontSize="36px" lineHeight="48px" marginBottom="15px">
                Thu tiền về nhanh, không lo thiếu vốn
              </Box>
              <Box
                fontSize="19px"
                lineHeight="32px"
                color="#7A7A7A"
                marginBottom="16px"
                maxWidth="85%"
              >
                Nhận thanh toán thẻ, chuyển khoản, thu COD, QR.. tiền về tài
                khoản ngay lập tức.
              </Box>
              <Box>
                <Box display="flex" marginBottom="35px">
                  <Box marginRight="20px">
                    <i style={{ color: "#0e8740" }}>
                      <CheckCircleIcon sx={{ width: "30px", height: "30px" }} />
                    </i>
                  </Box>
                  <Box>
                    <Box fontSize="21px" marginBottom="10px">
                      Mã QR cho từng đơn hàng
                    </Box>
                    <Box fontSize="17px" color="#7A7A7A">
                      Không lo nhập sai số tài khoản, chia sẻ biến động số dư
                      cho nhân viên bán hàng
                    </Box>
                  </Box>
                </Box>
                <Box display="flex">
                  <Box marginRight="20px">
                    <i style={{ color: "#0e8740" }}>
                      <CheckCircleIcon sx={{ width: "30px", height: "30px" }} />
                    </i>
                  </Box>
                  <Box>
                    <Box fontSize="21px" marginBottom="10px">
                      Sổ nợ thông minh
                    </Box>
                    <Box fontSize="17px" color="#7A7A7A">
                      Tự động nhắc nợ miễn phí qua SMS, Zalo.. thu tiền nhanh
                      gấp 3 lần bình thường
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <img src={bank} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box className="App">
        {/* <Grid container> */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <Box fontSize="55px" lineHeight="1.25em">
            Tải về ngay. MIỄN PHÍ
          </Box>
          <Box
            fontSize="18px"
            lineHeight="1.55em"
            marginTop="23px"
            marginBottom="45px"
            maxWidth="572px"
            textAlign="center"
          >
            Cùng hơn 400,000+ các tiểu thương, chủ cửa hàng đã và đang bán hàng
            dễ dàng và thu tiền nhanh chóng hàng ngày
          </Box>
          {/* <Grid item lg={12}> */}
          <Box>
            <img src={app} width="211" height="254" />
          </Box>
          {/* </Grid> */}
          <Box marginTop="20px">
            <Grid container spacing={0.5}>
              <Grid item>
                <img
                  src={appstore}
                  style={{ maxWidth: "100%", height: "auto" }}
                  width="178"
                  height="53"
                />
              </Grid>
              <Grid item>
                <img src={playstore} width="178" height="53" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* </Grid> */}
      </Box>

      <Box className="widget4" marginTop="115px" marginBottom="50px">
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <Box width="85%" marginRight="58px" padding="10px">
              <Box marginBottom="36px">
                <img src={logo} width="118" height="29.31" />
              </Box>
              <Box fontSize="15px" marginBottom="38px">
                <p>
                  Ứng dụng quản lý kinh doanh bỏ túi phổ biến #1 Việt Nam dành
                  cho chủ kinh doanh và cửa hàng nhỏ{" "}
                </p>
              </Box>
              <Box color="#7D818D">
                <Grid container spacing={2}>
                  <Grid item>
                    <span>
                      <LinkedInIcon />
                    </span>
                  </Grid>
                  <Grid item>
                    <span>
                      <FacebookIcon />
                    </span>
                  </Grid>
                  <Grid item>
                    <span>
                      <YouTubeIcon />
                    </span>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={2}>
            <Box fontSize="15px">
              <List sx={{ padding: "0" }}>
                <ListItem sx={{ fontWeight: "400" }}>Công ty</ListItem>
                <ListItem>Giới thiệu</ListItem>
                <ListItem>Tin tức</ListItem>
                <ListItem>Tuyển dụng</ListItem>
                <ListItem>Liên hệ</ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item lg={2}>
            <Box fontSize="15px">
              <List sx={{ padding: "0" }}>
                <ListItem sx={{ fontWeight: "400" }}>Sản phẩm</ListItem>
                <ListItem>SoBanHangPro</ListItem>
                <ListItem>Cộng đồng Chợ sổ</ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item lg={2}>
            <Box fontSize="15px">
              <List sx={{ padding: "0" }}>
                <ListItem sx={{ fontWeight: "400" }}>Hướng dẫn</ListItem>
                <ListItem>Bắt đầu sử dụng</ListItem>
                <ListItem>Hướng dẫn tính năng</ListItem>
                <ListItem>Thư viện</ListItem>
                <ListItem>Giáo Sư Sổ</ListItem>
                <ListItem>Xóa nền hình ảnh</ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item lg={2}>
            <Box fontSize="15px">
              <List sx={{ padding: "0" }}>
                <ListItem sx={{ fontWeight: "400" }}>Chính sách</ListItem>
                <ListItem>Bảo mật thông tin</ListItem>
                <ListItem>Điều khoản sử dụng</ListItem>
                <ListItem>Chính sách bán hàng</ListItem>
                <ListItem>Chính sách Thanh Toán</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box className="footer" marginTop="20px" height="94px">
        <Box
          paddingLeft="10px"
          paddingRight="10px"
          display="flex"
          justifyContent="space-between"
        >
          <Box fontSize="15px" color="#2C302D">
            © 2022 – SoBanHang được phát triển bởi Công ty TNHH Finan.{" "}
          </Box>
          <Box>
            <Grid container spacing={2}>
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
    </>
  );
}

export default Content;
