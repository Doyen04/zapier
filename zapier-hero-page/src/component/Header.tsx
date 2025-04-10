

function Header() {

    return (
        <div className='header'>
            <img src="/logo.svg" alt="" className='header-logo' />
            <nav className='navigation'>
                <div>
                    <p>Product</p>
                    <img src="./src/assets/arrow.png"/>
                </div>
                <div>
                    <p>Explore</p>
                    <img src="./src/assets/arrow.png"/>
                </div>
                <div>
                    <p>Pricing</p>
                    <img src="./src/assets/arrow.png"/>
                </div>
                <div>
                    <p>Support</p>
                    <img src="./src/assets/arrow.png"/>
                </div>
            </nav>
            <div className='button-container'>
                <button className='signin'>Sign In</button>
                <div>

                <button className='getstarted'>
                    <p>Get started</p>
                    <img src="./src/assets/download.png" alt="" />
                </button>
                <div className="button-line">
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header
