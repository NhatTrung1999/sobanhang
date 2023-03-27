import { Container, Divider } from "@mui/material";
import Content from "./components/Content/Content";
import { Banner, Navbar } from "./components/Header";

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Container>
                <Divider />
            </Container>
            <Content />
        </>
    );
}

export default App;
