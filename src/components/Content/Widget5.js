import { Container, Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import bank from "../../img/hinh-ngan-hang.webp";

function Widget5() {
    return (
        <Container>
            <Box className="widget3" marginTop="60px" marginBottom="100px">
                <Grid
                    container
                    spacing={2}
                    sx={{ justifyContent: { sm: "center", md: "center" } }}
                >
                    <Grid
                        item
                        lg={6}
                        sx={{ order: { xs: "2", md: "1", lg: "1" } }}
                    >
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
                                    fontSize: {
                                        xs: "28px",
                                        md: "36px",
                                        lg: "36px",
                                    },
                                    fontWeight: {
                                        xs: "700",
                                        md: "100",
                                        lg: "100",
                                    },
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
                                    fontWeight: {
                                        xs: "400",
                                        md: "100",
                                        lg: "100",
                                    },
                                }}
                            >
                                Nhận thanh toán thẻ, chuyển khoản, thu COD, QR..
                                tiền về tài khoản ngay lập tức.
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
                                                fontWeight: {
                                                    xs: "700",
                                                    md: "100",
                                                    lg: "100",
                                                },
                                            }}
                                        >
                                            Mã QR cho từng đơn hàng
                                        </Box>
                                        <Box
                                            fontSize="17px"
                                            color="#7A7A7A"
                                            sx={{
                                                fontWeight: {
                                                    xs: "400",
                                                    md: "100",
                                                    lg: "100",
                                                },
                                            }}
                                        >
                                            Không lo nhập sai số tài khoản, chia
                                            sẻ biến động số dư cho nhân viên bán
                                            hàng
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
                                                fontWeight: {
                                                    xs: "700",
                                                    md: "100",
                                                    lg: "100",
                                                },
                                            }}
                                        >
                                            Sổ nợ thông minh
                                        </Box>
                                        <Box
                                            fontSize="17px"
                                            color="#7A7A7A"
                                            sx={{
                                                fontWeight: {
                                                    xs: "400",
                                                    md: "100",
                                                    lg: "100",
                                                },
                                            }}
                                        >
                                            Tự động nhắc nợ miễn phí qua SMS,
                                            Zalo.. thu tiền nhanh gấp 3 lần bình
                                            thường
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        lg={6}
                        sx={{ order: { xs: "1", md: "2", lg: "2" } }}
                    >
                        <Box>
                            <img src={bank} width="100%" height="auto" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Widget5;
