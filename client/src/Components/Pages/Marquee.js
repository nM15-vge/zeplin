const Marquee = ({information: {headline, subhead, cta, background}}) => {
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
