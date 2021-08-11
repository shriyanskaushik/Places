import React, { useState, useContext } from 'react'

import Card from '../../Shared/Components/UIElements/Card';
import { Input } from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import ErrorModal from "../../Shared/Components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/Components/UIElements/LoadingSpinner";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import { AuthContext } from "../../Shared/Context/auth-context";
import './Auth.css';

export const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

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

    const authSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        if(isLoginMode){
            try{
                const response = await fetch('http://localhost:5000/api/users/login',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : ' application/json'
                    },
                    body : JSON.stringify({
                        email : formState.input.email.value,
                        password : formState.input.password.value,
                    })
                });

                const responseData = await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                auth.login();
            } catch(err){
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'Something went wrong, please try again.')
            }
        }else{
            try{
                const response = await fetch('http://localhost:5000/api/users/signup',{
                    method : 'POST',
                    headers : {
                        'Content-Type' : ' application/json'
                    },
                    body : JSON.stringify({
                        name : formState.input.name.value,
                        email : formState.input.email.value,
                        password : formState.input.password.value,
                    })
                });

                const responseData = await response.json();
                if(!response.ok){
                    throw new Error(responseData.message);
                }
                setIsLoading(false);
                auth.login();
            } catch(err){
                console.log(err);
                setIsLoading(false);
                setError(err.message || 'Something went wrong, please try again.')
            }
        }


    };

    const switchModeHandler = () => {
        if (!isLoginMode ){
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

    const errorHandler = () => {
        setError(null);
    }

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear = {errorHandler} />
            <Card className = "authentication">
                {isLoading && <LoadingSpinner asOverlay/>}
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
        </React.Fragment>
    )
}