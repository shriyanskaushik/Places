import React, { useState, useContext } from 'react'

import Card from '../../Shared/Components/UIElements/Card';
import { Input } from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import { AuthContext } from "../../Shared/Context/auth-context";
import './Auth.css';

export const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
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
        console.log(formState.input);
        auth.login();
    };

    const switchModeHandler = () => {
        if (!isLoginMode){
            setFormData(
                {
                    ...formState.input,
                    name : undefined
                },
                formState.input.email.isValid && formState.input.password.isValid
            );
        }else {
            setFormData(
                {
                    ...formState.input,
                    name : {
                        value : '',
                        isValid : false
                    }
                },
                false
            );
        };
        setIsLoginMode(prevMode => !prevMode);
    };

    return (
        <Card className = "authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit = {authSubmitHandler}>
                {!isLoginMode &&
                <Input element = "input" id = "name" type = "text" label = "Name" validators = {[VALIDATOR_REQUIRE()]} errorText = "Please enter a name." onInput = {inputHandler} /> }
                <Input id = "email" element = "input" type = "email" label = "E-Mail" validators = {[VALIDATOR_EMAIL()]} errorText = "Please enter a valid email." onInput = {inputHandler} />
                <Input id = "password" element = "input" type = "password" label = "Password" validators = {[VALIDATOR_MINLENGTH(8)]} errorText = "Please enter correct password, atleast 8 charaacters." onInput = {inputHandler} />
                <Button type = "submit" disabled = {!formState.isValid}>
                    {isLoginMode ? 'Login' : 'SignUp'}
                </Button>
            </form>
            <Button inverse onClick = {switchModeHandler}>
                Switch to {isLoginMode ? 'Sign Up' : 'Login'}
            </Button>
        </Card>
    )
}