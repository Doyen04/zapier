
import SignupButton from "./SignupButton"

function Header() {

    return (
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
        </div>
    )
}

export default Header
