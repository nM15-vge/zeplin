import { createContext, useContext, useEffect, useState } from "react";

export const ContentContext = createContext();
export const useContent = () => useContext(ContentContext);

export default function ContentProvider(props) {
    const [data, setData] = useState(null)

    useEffect(() => {
        (async() => {
            const res = await fetch("http://localhost:5000/api/test-data");
            setData(await res.json());

        })()
    }, []);
    return (
        <ContentContext.Provider value={{data}}>
            {props.children}
        </ContentContext.Provider>
    );
};
