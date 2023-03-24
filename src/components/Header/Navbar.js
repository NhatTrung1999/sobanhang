import "./Navbar.css";
import Logo from "../../img/cropped-cropped-logo-website.png";
import { Box, Grid, Link, List, ListItem, Divider } from "@mui/material";
import { Container } from "@mui/system";

function Navbar() {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="15px"
        paddingBottom="15px"
      >
        <Box>
          <img src={Logo} width="120" height="29.813" />
        </Box>
        <Box display="flex" alignItems="center">
          <Box>
            <List>
              <Grid container spacing={2}>
                <Grid item>
                  <ListItem className="nav-link" sx={{ fontWeight: "100" }}>
                    <Link color="black" underline="none">
                      Chợ sổ
                    </Link>
                  </ListItem>
                </Grid>
                <Grid item>
                  <ListItem className="nav-link" sx={{ fontWeight: "100" }}>
                    <Link color="black" underline="none">
                      Cộng đồng
                    </Link>
                  </ListItem>
                </Grid>
                <Grid item>
                  <ListItem className="nav-link" sx={{ fontWeight: "100" }}>
                    <Link color="black" underline="none">
                      Blog
                    </Link>
                  </ListItem>
                </Grid>
                <Grid item>
                  <ListItem className="nav-link" sx={{ fontWeight: "100" }}>
                    <Link color="black" underline="none">
                      Hỗ trợ
                    </Link>
                  </ListItem>
                </Grid>
                <Grid item>
                  <ListItem className="nav-link" sx={{ fontWeight: "100" }}>
                    <Link color="black" underline="none">
                      Bảng giá
                    </Link>
                  </ListItem>
                </Grid>
              </Grid>
            </List>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box className="login">
            <Link underline="none" color="#0E8740" fontWeight={100}>
              Đăng nhập
            </Link>
          </Box>
          <Box className="register">
            <Link underline="none" color="#fff" fontWeight={100}>
              Đăng ký
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;
