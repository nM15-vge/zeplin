import styles from "./Marquee.module.css";
const Marquee = ({information: {headline, subhead, cta, background}}) => {
    const root = document.getElementById("root")
    root.style.background = `center / cover no-repeat url(${process.env.PUBLIC_URL}/${background})`;

    return (
        <div id={styles.marquee}>
            <div id={styles.head}>
                <h1 id={styles.headline}>{headline}</h1>
                <p id={styles.subhead}>{subhead}</p>
            </div>
            <div id={styles.cta}>
                <p>{cta}</p>
                <span id={styles.subCTA}>
                    <span id={styles.textTalk}>LET'S TALK. </span>
                    <span id={styles.arrow} class={`fas fa-long-arrow-alt-right`}></span>
                </span>
            </div>
        </div>
    )
}

export default Marquee;
