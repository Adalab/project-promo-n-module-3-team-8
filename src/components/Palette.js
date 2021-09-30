const Palette = (props) => {

    return (
        <label className={props.classNameLabel} htmlFor={props.htmlFor}
        // onChange={handlePalette()}
        >
            <input
                className="range"
                id={props.id}
                type="radio"
                value={props.value}
                name={props.name}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
        </label>
    );
};

export default Palette;