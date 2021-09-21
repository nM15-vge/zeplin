import { createContext, useContext, useEffect } from "react";

export const ContentContext = createContext();
export const useContent = () => useContext(ContentContext);

export default function ContentProvider(props) {
    let data;

    useEffect(() => {
        data = (async() => await fetch("https://f.v1.n0.cdn.getcloudapp.com/items/3e1W2F0W1s2U2d3R2Z46/content.json"))()
    }, []);

    return (
        <ContentContext.Provider value={{data}}>
            {props.children}
        </ContentContext.Provider>
    );
};
