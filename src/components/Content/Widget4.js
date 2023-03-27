import { Container, Box, Grid } from "@mui/material";
import PosIcon from "../../img/posmachine.svg";
import Stock from "../../img/stock.svg";
import Income from "../../img/income.svg";
import Order from "../../img/order.svg";
import Takecare from "../../img/takecare.svg";
import Discount from "../../img/discount.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Widget4() {
    return (
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
                                fontSize: {
                                    xs: "36px",
                                    md: "44px",
                                    lg: "44px",
                                },
                                fontWeight: {
                                    xs: "700",
                                    md: "100",
                                    lg: "100",
                                },
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
                                            <img
                                                src={PosIcon}
                                                width="48"
                                                height="35.15"
                                            />
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
                                            Tạo hoá đơn bán hàng, thu tiền nhanh
                                            chóng trên điện thoại
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
                                            <img
                                                src={Discount}
                                                width="48"
                                                height="24.15"
                                            />
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
                                            Tạo mã giảm giá và quảng cáo để thu
                                            hút khách hàng và dễ dàng chốt đơn
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
                                            <img
                                                src={Takecare}
                                                width="48"
                                                height="42.15"
                                            />
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
                                            Tự động lưu thông tin khách, lịch sử
                                            mua hàng, tích điểm thành viên..
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
                                            <img
                                                src={Order}
                                                width="48"
                                                height="49.15"
                                            />
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
                                            Các quán ăn, quán spa.. lên đơn ,
                                            giữ chỗ dễ dàng không sợ nhầm lẫn
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
                                            <img
                                                src={Stock}
                                                width="48"
                                                height="55.15"
                                            />
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
                                            In / quét mã vạch, theo dõi nhập,
                                            xuất không lo thiếu hàng, thất thoát
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
                                            <img
                                                src={Income}
                                                width="48"
                                                height="55.15"
                                            />
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
                                            Không phải mất công tổng hợp số liệu
                                            cuối ngày. Thu chi, lãi lỗ biết liền
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
                            marginBottom: {
                                xs: "45px",
                                md: "110px",
                                lg: "110px",
                            },
                            marginTop: {
                                xs: "30px",
                                md: "100px",
                                lg: "100px",
                            },
                        }}
                    >
                        <Box
                            style={{
                                fontSize: "17px",
                                marginRight: "15px",
                            }}
                            sx={{
                                fontWeight: {
                                    xs: "700",
                                    md: "100",
                                    lg: "100",
                                },
                            }}
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
    );
}

export default Widget4;
