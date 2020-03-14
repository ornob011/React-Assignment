import React, { useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUserFriends } from "@fortawesome/free-solid-svg-icons";
// ======================

// ====================
const Card = props => {
    const { name, email, phone, income, picture } = props.friend;

    const [isfriend, setIsfriend] = useState(false);
    let Button = (
        <button
            onClick={() => {
                props.handleFriendsList(props.friend);
                setIsfriend(true);
            }}
        >
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
    </button>
    );
    if (isfriend) {
        Button = (
            <button className="disablebtn" disabled>
                <FontAwesomeIcon icon={faUserFriends} /> friend!
      </button>
        );
    }

    return (
        <div className="container">
            <div className="img-container">
                <img src={picture.large} alt="" className="profile-img" />
            </div>
            <div className="content">
                <div>
                    <p>{name}</p>
                </div>

                <div>
                    <h4>{name}</h4>
                    <h4>{email}</h4>
                    <h4>Income :{income}</h4>
                    <h4>Phone : {phone}</h4>
                </div>

            </div>
            {Button}
        </div>
        </div >
    );
};

export default Card;
