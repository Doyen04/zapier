
import { useState } from "react"
import SignupButton from "./SignupButton"

function Header() {
    const [state, setState] = useState(false)
    const trigger = () => {
        console.log(888888);
        
        setState(!state)
    }

    return (
        <span style={{width: '100%', position: 'relative', display: 'flex', justifyContent:'center'}}>
            <div className='header'>
                <img src="/logo.svg" alt="" className='header-logo' />
                <nav className='navigation'>
                    <div>
                        <p>Product</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Explore</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Pricing</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Support</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                </nav>
                <div className='button-container'>
                    <button className='signin'>Sign In</button>
                    <SignupButton />
                </div>
                <img onClick={trigger} className="hamburger" src="./src/assets/menu-icon.png" alt="" />
            </div>
            <div className="mobile-nav-container" onClick={trigger} style={(state)?{display:'flex'}:{display:'none'}}>
                <nav className='mobile-nav'>
                    <div>
                        <p>Product</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Explore</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Pricing</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                    <div>
                        <p>Support</p>
                        <img src="./src/assets/arrow.png" />
                    </div>
                </nav>
                <div className='mobile-button-container'>
                    <button className='signin'>Sign In</button>
                    <SignupButton />
                </div>
            </div>
        </span>

    )
}

export default Header
