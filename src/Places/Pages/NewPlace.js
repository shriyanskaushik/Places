import React from 'react'

import { VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import { Input } from "../../Shared/Components/FormElements/Input";
import './NewPlace.css';

export const NewPlace = () => {
    return (
        <form className = "place-form">
            <Input type = "text" label = "Title" element = "input" errorText = "Please enter the title first." placeholder="Enter Title" validators = {[VALIDATOR_REQUIRE()]} />
        </form>
    )
}