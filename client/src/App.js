import './App.css';
import { useContent } from './Context/ContentContext';
import { NavBar } from "./Components/Navigation";
function App() {
    const data = useContent();
    console.log(data)
    return (
        <>
            <NavBar />
        </>
    )
}

export default App;
