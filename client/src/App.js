import './App.css';
import { useContent } from './context/ContentContext';

function App() {
    const {data} = useContent();
    return (
        <di>
            {data}
        </di>
    )
}

export default App;
