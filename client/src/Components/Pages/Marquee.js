import styles from "./Marquee.module.css";
const Marquee = ({information: {headline, subhead, cta, background}}) => {
    const root = document.getElementById("root")
    root.style.background = `center / cover no-repeat url(${process.env.PUBLIC_URL}/${background})`;

    return (
        <div id={styles.marquee}>
            <div>
                <h1>{headline}</h1>
                <p>{subhead}</p>
            </div>
            <div>{cta}</div>
        </div>
    )
}

export default Marquee;
