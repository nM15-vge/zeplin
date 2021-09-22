import './App.css';
import { useContent } from './Context/ContentContext';
import { NavBar } from "./Components/Navigation";
import { Route, Switch, Redirect } from 'react-router';
import { Marquee } from "./Components/Pages";
function App() {
    const { pages } = useContent();
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/industries" />
                </Route>
                {pages && pages.map(({slug, blocks}) => (
                <Route path={`/${slug}`} key={slug}>
                    <Marquee information={blocks[0]} />
                </Route>
                ))}
            </Switch>
        </>
    )
}

export default App;
