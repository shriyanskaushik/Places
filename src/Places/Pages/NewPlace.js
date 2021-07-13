import React from 'react'

import { Input } from "../../Shared/Components/FormElements/Input";
import './NewPlace.css';

export const NewPlace = () => {
    return (
        <form className = "place-form">
            <Input type = "text" label = "Title" element = "input" errorText = "Please enter the title first."/>
            <Input type = "text" label = "Description"/>
        </form>
    )
}
