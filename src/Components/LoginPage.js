import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = (props) => {
    return (
        <div className="mainLogin">
                <h1>Lets Dine.</h1>
            <div className="instruction">
                {/* <p>Enter in your dining partners name. From there, chose ten restaurants you would like to take them to and we will take all the work out of deciding which one to try! </p> */}
            
            <form className="loginForm clearfix">
                    <label className="listNameLabel" htmlFor="listName">come dine with me. <i class="fas fa-utensils"></i></label>
                <input type="text" id="listName" placeholder="guest's name"
                    onChange={props.onChangeEvent}
                    value={props.userName}
                    name='userName'
                    required
                    />
       

                <Link
                    className="linkToMainApp" to="/search"
                    onClick={(event) => props.createNewFirebaseList(event)}>
                    Lettuce Eat!
                </Link>
            

                </form>
            </div>
        </div>

    )
}

export default LoginPage;