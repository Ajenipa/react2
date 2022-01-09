import React from "react"
import "./Button.css"
import {Link} from "react-router-dom"
const STYLES = ["btn--primary", "btn--outline","btn--test"]
const SIZES = ["btn--medium","btn--large"]
const Button=(
    {children,
    buttonStyle,
    buttonSize,
    onClick,
    type}
    ) =>{
    const checkButtonstyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]
    const checkButtonsize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]
    return (

        <Link to="/signup" className='btn-mobile'>
        <button className={`btn ${checkButtonstyle} btn ${checkButtonsize}`} onClick={onClick} type={type} >{children}</button>
        </Link>
    )

}
export default Button



