import React,{useCallback, useReducer} from 'react'

import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../Shared/util/validators";
import Button  from "../../Shared/Components/FormElements/Button";
import { Input } from "../../Shared/Components/FormElements/Input";
import './NewPlace.css';

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else{
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.inputId] : { value : action.value, isValid : action.isValid }
                },
                isValid : formIsValid
            }


        default:
            return state;
    }
}

export const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        input : {
            title : {
                value : '',
                isValid : false
            },
            description : {
                value : '',
                isValid : false
            }
        },
        isValid:false
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({ type : 'INPUT_CHANGE', inputId : id, value : value, isValid : isValid })
    }, [dispatch]);

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