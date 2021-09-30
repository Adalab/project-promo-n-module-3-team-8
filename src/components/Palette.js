

const Palette = (props) => {
    const handlePalette = (ev) => {
        props.handlePalette(ev.target.value.clicked)
        console.log(ev.target.value.clicked);
    }
    return (
        <label className={props.classNameLabel} htmlFor={props.htmlFor} >
            <input
                className="range"
                id={props.id}
                type="radio"
                value={props.value}
                name={props.name}
                onChange={props.handlePalette}
            />
            <div className={props.box1}></div>
            <div className={props.box2}></div>
            <div className={props.box3}></div>
        </label>
    );
};

export default Palette;