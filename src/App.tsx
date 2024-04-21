import "./App.css";
import { ThemeProvider } from "./components/theme/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/navbar/Nav";
import CharCreator from "./pages/CharCreator";
import DiceAttributes from "./pages/DiceAttributes";
import PointsAllocation from "./pages/PointsAllocation";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Nav />
                <div className="px-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/char-creation"
                            element={<CharCreator />}
                        />
                        <Route
                            path="/char-creation/dice-rolls"
                            element={<DiceAttributes />}
                        />
                        <Route
                            path="/char-creation/allocate-points"
                            element={<PointsAllocation />}
                        />
                        <Route
                            path="/fighting"
                            element={<p>Fighting Page</p>}
                        />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
