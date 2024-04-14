import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/navbar/Nav";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
