import React, { useState } from "react";
import fakeData from "../../fakeData";
import Header from '../Header/Header';
import Card from '../Card/Card'

var amount = 0;
const Friends = () => {
    const [friend, setFriend] = useState([]);
    const [X, setAmount] = useState(0);

    const handleFriendsList = props => {
        amount = amount + parseFloat(props.income);
        console.log(amount);
        setAmount(amount);
        const newFriend = [...friend, props];
        setFriend(newFriend);
    };

    return (
        <section>
            <div>{<Header friend={friend.length} amount={amount} />}</div>

            <div className="friend-container">
                {fakeData.map(sf => (
                    <Card friend={sf} handleFriendsList={handleFriendsList}></Card>
                ))
                }
            </div>
        </section>
    );
};

export default Friends;