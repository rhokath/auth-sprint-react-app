import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../axiosWithAuth';


const UserList = (props) => {
    const [userList, setUserList] = useState([]);
    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:3300/api/jokes')
            .then(res => {
                console.log(res)
                setUserList(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    useEffect(()=> {
        getData()
    }, [])
    const logout = ()=> {
        localStorage.removeItem('token');
        props.history.push('/');   
      };
    return(
        <div className="userList">
            <button onClick={()=> logout()}>log out</button>
            <h1>jokes!</h1>
            {userList && userList.map(joke => {
            
                return <p key={joke.id}>{joke.joke}</p>
                
            })}
            
        </div>
    )
}

export default UserList;