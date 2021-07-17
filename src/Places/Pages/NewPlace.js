import React,{useCallback} from 'react'

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import { Input } from "../../Shared/Components/FormElements/Input";
import './NewPlace.css';

export const NewPlace = () => {
    const titleInputHandler = useCallback((id, value, isValid) => {

    }, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {

    }, []);

    return (
        <form className = "place-form">
            <Input type = "text" label = "Title" element = "input" errorText = "Please enter the title first." placeholder="Enter Title" validators = {[VALIDATOR_REQUIRE()]} onInput = {titleInputHandler} id = "title" />
            <Input label = "Description" element = "textarea" errorText = "Please enter a valid description (atleast 5 characters)." placeholder="Enter Description" validators = {[ VALIDATOR_MINLENGTH(5)]} onInput = {descriptionInputHandler} id = "description" />
        </form>
    )
}