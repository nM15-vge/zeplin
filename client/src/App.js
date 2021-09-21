import './App.css';
import { useContent } from './context/ContentContext';

function App() {
    const data = useContent();
    console.log(data)
    return (
        <div>
            <div>Hello World</div>
        </div>
    )
}

export default App;
