
// import 

import SignupButton from "./SignupButton"

function Headline() {

    return (
        <div className='headline-container'>
            <div className="headline">
                Designers,
                welcome home.
            </div>
            <div className="sub-headline">
            Sketch is a toolkit made by designers, for designers, that puts the focus on you and your work.
            </div>
            <div className="call-to-action-container">
                <div className="signupbutton-container">
                    <SignupButton style={{width: '196px', background: "0px 14px 14px  #ea6d00"}} text={"Get started for free"}/>
                </div>
                <p>Requires macOS Ventura (13.0.0) or newer.</p>
            </div>
        </div>
    )
}

export default Headline
