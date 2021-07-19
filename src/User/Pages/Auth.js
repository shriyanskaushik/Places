import React from 'react'

import Card from '../../Shared/Components/UIElements/Card';
import { Input } from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../Shared/util/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import './Auth.css';

export const Auth = () => {
    const [formState, inputHandler] = useForm({
        email : {
            value : '',
            isValid : false
        },
        password : {
            value : '',
            isValid : false
        }
    }, false);

    const authSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    };


    return (
        <Card className = "authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit = {authSubmitHandler}>
                <Input id = "email" element = "input" type = "email" label = "E-Mail" validators = {[VALIDATOR_EMAIL()]} errorText = "Please enter a valid email." onInput = {inputHandler} />
                <Input id = "password" element = "input" type = "password" label = "Password" validators = {[VALIDATOR_MINLENGTH(8)]} errorText = "Please enter correct password, atleast 8 charaacters." onInput = {inputHandler} />
                <Button type = "submit" disabled = {!formState.isValid}>Login</Button>
            </form>
        </Card>
    )
}