const Marquee = ({information: {headline, subhead, cta, background}}) => {
    document.getElementById("root").style.backgroundImage = `url(${process.env.PUBLIC_URL}/${background})`
    return (
        <div>
            <div>
                <h1>{headline}</h1>
                <p>{subhead}</p>
            </div>
            <div>{cta}</div>
        </div>
    )
}

export default Marquee;
