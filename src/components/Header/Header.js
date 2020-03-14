import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <div className="head">
            <div className="header">
                <div>
                </div>
                <div className="count">
                    <h4>
                        Count :<br />
                        <span className="bc">{props.friend}</span>
                    </h4>
                </div>
                <div className="income">
                    <h4>
                        Total Income :<br />
                        <span className="amount">{props.amount}</span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Header;
