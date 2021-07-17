import React from 'react'

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import Button  from "../../Shared/Components/FormElements/Button";
import { Input } from "../../Shared/Components/FormElements/Input";
import { useForm } from "../../Shared/Hooks/form-hook";
import './PlaceForm.css';

export const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title : {
            value : '',
            isValid : false
        },
        description : {
            value : '',
            isValid : false
        },
        address : {
            value : '',
            isValid : false
        }
    }, false);



    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return (
        <form className = "place-form" onSubmit = {submitHandler}>
            <Input type = "text" label = "Title" element = "input" errorText = "Please enter the title first." placeholder="Enter Title" validators = {[VALIDATOR_REQUIRE()]} onInput = {inputHandler} id = "title" />
            <Input label = "Description" element = "textarea" errorText = "Please enter a valid description (atleast 5 characters)." placeholder="Enter Description" validators = {[ VALIDATOR_MINLENGTH(5)]} onInput = {inputHandler} id = "description" />
            <Input type = "text" label = "Address" element = "input" errorText = "Please enter the valid address." placeholder="Enter Address" validators = {[VALIDATOR_REQUIRE()]} onInput = {inputHandler} id = "address" />
            <Button type = "submit" disabled = {!formState.isValid} > Add Place </Button>
        </form>
    )
}