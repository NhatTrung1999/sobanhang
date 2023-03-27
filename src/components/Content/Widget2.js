import { Container, Box } from "@mui/material";

function Widget2() {
    return (
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
                        sx={{
                            fontWeight: { xs: "700", md: "100", lg: "100" },
                        }}
                    >
                        Thích hợp cho mọi ngành hàng
                    </Box>
                    <Box
                        textAlign="center"
                        fontSize="19px"
                        maxWidth="600px"
                        sx={{
                            fontWeight: { xs: "400", md: "100", lg: "100" },
                        }}
                    >
                        Ai cũng có thể dùng SoBanHang từ bán sỉ, bán lẻ, tạp
                        hoá, nông sản, thời trang, quán ăn, sữa.. cho tới dịch
                        vụ spa, cắt tóc..
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Widget2;
