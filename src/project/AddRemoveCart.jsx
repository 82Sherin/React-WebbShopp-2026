import React, { useState } from "react";

function AddRemoveCart() {
    const [count, setCount] = useState(0);
    const [isAdd, setIsAdd] = useState(false);

    const add = () => {
        setCount(count + 1);
    }

    const remove = () => {
        setCount(count - 1 < 0 ? 0 : count - 1);
    }

    const addRemove = () => {
        setIsAdd(!isAdd);
        if (isAdd) {
            setCount(0);
        }
    }

    return (
        <div className="add-remove-container">
            <div className="counter">
                <button className="remove-button" onClick={remove}>-</button>
                <button className="add-button" onClick={add}>+</button>
                <p className="count-number">{count}</p>
            </div>
            <button 
                className={isAdd ? "remove-button" : "add-button"} 
                onClick={addRemove}>
                {isAdd ? "Remove from Cart" : "Add to Cart"}
            </button>
            
        </div>
    );
}

export default AddRemoveCart;