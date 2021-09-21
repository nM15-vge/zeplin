import { createContext, useContext, useEffect, useState } from "react";

export const ContentContext = createContext();
export const useContent = () => useContext(ContentContext);

export default function ContentProvider(props) {
    const [pages, setPages] = useState(null)

    useEffect(() => {
        (async() => {
            const res = await fetch("http://localhost:5000/api/test-data");
            setPages((await res.json()).pages);

        })()
    }, []);
    return (
        <ContentContext.Provider value={{pages}}>
            {props.children}
        </ContentContext.Provider>
    );
};
