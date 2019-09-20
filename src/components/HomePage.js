import React from "react";

const Home = (props) => {
    return(
        <div className="home">
            <p>hello from home screen</p>
            <button className="homeBtn" onClick={()=> props.history.push('/login')}>Login</button>
            <button className="homeBtn" onClick={()=> props.history.push('/register')}>Register</button>
        </div>
    )
}

export default Home;