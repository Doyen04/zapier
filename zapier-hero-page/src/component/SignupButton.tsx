import React from "react";


interface customStyle{
    style?: React.CSSProperties; 
    text?: string;
}

const  SignupButton: React.FC<customStyle> = ({style, text})=> {

    return (

        <div style={style}>
            <button className='getstarted' style={style}>
                <p>{text??'Get started'}</p>
                <img src="./src/assets/download.png" alt="" />
            </button>
            <div className="button-line">
            </div>
        </div>
    )
}

export default SignupButton;