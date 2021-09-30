import { useState } from 'react';
import Palette from './Palette';

const Design = (props) => {
    const handleClick = (ev) => {
        props.handleCollapsable(ev.currentTarget.id)
    }

    return (
        <section className="profilecards__section--design" onClick={handleClick} id='collapsableDesign'>
            <div className="form__header" >
                <div className="header--text">
                    <i className="far fa-object-ungroup icon-start"></i>
                    <h2 className="header--title">Diseña</h2>
                </div>
                <i className={`fas fa-chevron-down arrow ${props.arrowDesign}`}></i>
            </div>

            <fieldset className={`design__form js_fieldset ${props.design}`}>
                <h3 className="design__form--colors">colores:</h3>
                <div className="design__form--ranges">


                </div>
            </fieldset>
        </section>
    );
};

export default Design;