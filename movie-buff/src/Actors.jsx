import React from "react";
import { useState } from "react";

function Actors() {

    function getActor() {

    }

    const [actor, setActor] = React.useState('');

    function handleClick(event) {
        setActor(getActor());
    }

    return (
        <div>
            <button>
                Actors
            </button>
        </div>
    )
}

export default Actors;