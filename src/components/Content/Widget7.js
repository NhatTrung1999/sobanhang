import { Container, Box, Grid, List, ListItem } from "@mui/material";
import logo from "../../img/cropped-cropped-logo-website.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Widget7() {
    return (
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
                                    Ứng dụng quản lý kinh doanh bỏ túi phổ biến
                                    #1 Việt Nam dành cho chủ kinh doanh và cửa
                                    hàng nhỏ{" "}
                                </p>
                            </Box>
                            <Box color="#7D818D">
                                <Grid
                                    container
                                    spacing={2}
                                    sx={{ cursor: "pointer" }}
                                >
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
                                <ListItem sx={{ fontWeight: "400" }}>
                                    Công ty
                                </ListItem>
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
                                <ListItem sx={{ fontWeight: "400" }}>
                                    Sản phẩm
                                </ListItem>
                                <ListItem className="item">
                                    SoBanHangPro
                                </ListItem>
                                <ListItem className="item">
                                    Cộng đồng Chợ sổ
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={3}>
                        <Box fontSize="15px">
                            <List sx={{ padding: "0" }}>
                                <ListItem sx={{ fontWeight: "400" }}>
                                    Hướng dẫn
                                </ListItem>
                                <ListItem className="item">
                                    Bắt đầu sử dụng
                                </ListItem>
                                <ListItem className="item">
                                    Hướng dẫn tính năng
                                </ListItem>
                                <ListItem className="item">Thư viện</ListItem>
                                <ListItem className="item">Giáo Sư Sổ</ListItem>
                                <ListItem className="item">
                                    Xóa nền hình ảnh
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    <Grid item lg={2} xs={12} sm={3}>
                        <Box fontSize="15px">
                            <List sx={{ padding: "0" }}>
                                <ListItem sx={{ fontWeight: "400" }}>
                                    Chính sách
                                </ListItem>
                                <ListItem className="item">
                                    Bảo mật thông tin
                                </ListItem>
                                <ListItem className="item">
                                    Điều khoản sử dụng
                                </ListItem>
                                <ListItem className="item">
                                    Chính sách bán hàng
                                </ListItem>
                                <ListItem className="item">
                                    Chính sách Thanh Toán
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default Widget7;
