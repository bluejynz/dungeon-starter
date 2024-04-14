import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/navbar/Nav";
import CharCreator from "./pages/CharCreator";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/char-creation" element={<CharCreator />} /> 
                    <Route path="/char-creation/dice-rolls" element={<p>Dice Rolls Page</p>} /> 
                    <Route path="/fighting" element={<p>Fighting Page</p>} /> 
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
