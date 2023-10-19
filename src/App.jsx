import './css/app.css'
import Home from "./pages/Home.jsx";
import Menu from "./components/Menu.jsx";
import AddTechno from "./pages/AddTechno.jsx";

function App() {
    return (
        <>
            <Menu/>
            <Home />
            <AddTechno />
        </>
    )
}
export default App
