import { Container, Box, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import finestore from "../../img/finstore.webp";

function Widget1() {
    return (
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
                                        Chủ động tiếp cận hàng triệu khách qua
                                        Facebook, Zalo, SMS.. tăng thu nhập
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
                                                    Cửa hàng online của riêng
                                                    bạn
                                                </Box>
                                                <Box
                                                    fontSize="17px"
                                                    color="#7A7A7A"
                                                    lineHeight="1.705em"
                                                    sx={{
                                                        maxWidth: {
                                                            xs: "85%",
                                                            md: "75%",
                                                            lg: "75%",
                                                        },
                                                    }}
                                                >
                                                    Chỉ mất 2 phút để tạo
                                                    website & sẵn sàng chốt đơn
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
                                                        maxWidth: {
                                                            xs: "90%",
                                                            md: "80%",
                                                            lg: "80%",
                                                        },
                                                    }}
                                                >
                                                    Đa dạng đối tác vận chuyển,
                                                    thu COD, ngân hàng.. không
                                                    phí hoa hồng
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
    );
}

export default Widget1;
