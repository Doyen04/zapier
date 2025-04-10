
import './App.css'

import  Header  from "./component/Header";
import Headline from "./component/Headline"

function App() {

    return (
        <div className='body-container'>
            <Header />
            <Headline />
            <div className='bottom-image-container'>
                <img src="./src/assets/left.png" alt="" className='float-left'/>
                <img src="./src/assets/bottom-image.png" alt="" />
                <img src="./src/assets/right.png" alt="" className='float-right' />
            </div>
        </div>
    )
}

export default App
