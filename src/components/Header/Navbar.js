import Logo from "../../img/cropped-cropped-logo-website.png";
import {
    Container,
    Box,
    Grid,
    Link,
    List,
    ListItem,
    Divider,
} from "@mui/material";
// import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                paddingTop="15px"
                paddingBottom="15px"
            >
                <Box sx={{ flex: "2", cursor: "pointer" }}>
                    <img src={Logo} width="120" height="29.813" />
                </Box>
                <Box sx={{ display: { xs: "block", md: "flex", lg: "none" } }}>
                    <MenuIcon
                        sx={{ width: "50px", height: "35px", color: "#7e8085" }}
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }}
                    />
                </Box>
                {/* mobile desktop */}

                <Box
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        zIndex: 100,
                        width: "80%",
                        backgroundColor: "#fff",
                        transition: "transform 0.3s ease-out",
                        transform: isMenuOpen
                            ? "translateX(0)"
                            : "translateX(-100%)",
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        padding="10px"
                    >
                        <CloseIcon onClick={() => setIsMenuOpen(false)} />
                    </Box>
                    <List>
                        <ListItem className="item" sx={{ fontWeight: "700" }}>
                            <Link color="black" underline="none">
                                Chợ sổ
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem
                            className="item"
                            sx={{
                                fontWeight: "700",
                            }}
                        >
                            <Link color="black" underline="none">
                                Cộng đồng
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem className="item" sx={{ fontWeight: "700" }}>
                            <Link color="black" underline="none">
                                Blog
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem className="item" sx={{ fontWeight: "700" }}>
                            <Link color="black" underline="none">
                                Hỗ trợ
                            </Link>
                        </ListItem>
                        <Divider />

                        <ListItem className="item" sx={{ fontWeight: "700" }}>
                            <Link color="black" underline="none">
                                Bảng giá
                            </Link>
                        </ListItem>
                    </List>
                </Box>

                <Box
                    onClick={() => setIsMenuOpen(false)}
                    sx={{
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 100,
                        width: "20%",
                        backgroundColor: "transparent",
                        transition: "transform 0.3s ease-out",
                        transform: isMenuOpen
                            ? "translateX(0%)"
                            : "translateX(-500%)",
                        overflowY: "auto",
                        WebkitOverflowScrolling: "touch",
                    }}
                ></Box>

                {/* PC Desktop */}
                <Box display="flex" alignItems="center">
                    <Box
                        sx={{
                            display: {
                                xs: "none",
                                md: "none",
                                lg: "flex",
                            },
                        }}
                    >
                        <List>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ListItem
                                        className="item"
                                        sx={{ fontWeight: "100" }}
                                    >
                                        <Link color="black" underline="none">
                                            Chợ sổ
                                        </Link>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem
                                        className="item"
                                        sx={{ fontWeight: "100" }}
                                    >
                                        <Link color="black" underline="none">
                                            Cộng đồng
                                        </Link>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem
                                        className="item"
                                        sx={{ fontWeight: "100" }}
                                    >
                                        <Link color="black" underline="none">
                                            Blog
                                        </Link>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem
                                        className="item"
                                        sx={{ fontWeight: "100" }}
                                    >
                                        <Link color="black" underline="none">
                                            Hỗ trợ
                                        </Link>
                                    </ListItem>
                                </Grid>
                                <Grid item>
                                    <ListItem
                                        className="item"
                                        sx={{ fontWeight: "100" }}
                                    >
                                        <Link color="black" underline="none">
                                            Bảng giá
                                        </Link>
                                    </ListItem>
                                </Grid>
                            </Grid>
                        </List>
                    </Box>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Box
                        className="login"
                        sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
                    >
                        <Link
                            underline="none"
                            color="#0E8740"
                            fontWeight={100}
                            sx={{ cursor: "pointer" }}
                        >
                            Đăng nhập
                        </Link>
                    </Box>
                    <Box
                        className="register"
                        sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
                    >
                        <Link
                            underline="none"
                            color="#fff"
                            fontWeight={100}
                            sx={{ cursor: "pointer" }}
                        >
                            Đăng ký
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Navbar;
