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
        <div className="user-list">
            <div className="d-flex align-center card" >
                <img src={picture.large} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>Income : {income}</p>
                </div>
                <div className="user-list_content">

                    <p>Email: {email}</p>
                    <p>Phone : {phone}</p>
                </div>
                {Button}
            </div>
        </div>
    );
};

export default Card;
