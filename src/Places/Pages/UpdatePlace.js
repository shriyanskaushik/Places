import React from 'react'
import { useParams } from "react-router-dom";

import {Input} from "../../Shared/Components/FormElements/Input";
import Button from "../../Shared/Components/FormElements/Button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../Shared/util/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Buliding',
        description:'One of the most famous skyscraper in the world!',
        imageURL:'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/cb/4a/65.jpg',
        address : '20W 34th St, New York, NY 10001',
        location : {
            lat : 40.7484405,
            lng: -73.9878584
        },
        creator:'1'
    },
    {
        id:'p2',
        title:'Empire State Buliding',
        description:'One of the most famous skyscraper in the world!',
        imageURL:'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/cb/4a/65.jpg',
        address : '20W 34th St, New York, NY 10001',
        location : {
            lat : 40.7484405,
            lng: -73.9878584
        },
        creator:"2"
    }
]

export const UpdatePlace = () => {
    const placeId = useParams().placeId;
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [formState, inputHandler] = useForm({
        title : {
            value : identifiedPlace.title,
            isValid : true
        },
        description : {
            value : identifiedPlace.description,
            isValid : true
        }
    }, true)

    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>No Place found!!!</h2>
            </div>
        );
    }

    const updatePlaceHandler = (event) => {
        event.preventDefault();
        console.log(formState.input);
    }

    return (
        <div>
            <form className="place-form" onSubmit = {updatePlaceHandler}>
                <Input id="title" element = "input" type = "text" label = "Title" validators = {[VALIDATOR_REQUIRE()]} errorText ="Please enter a valid title." onInput = {inputHandler} initialValid = {formState.input.title.isValid} initialValue = {formState.input.title.value} />
                <Input id="description" element = "textarea" label = "Description" validators = {[VALIDATOR_MINLENGTH(5)]} errorText ="Please enter a valid description(atleast 5 characters)." onInput = {inputHandler} initialValid = {formState.input.description.isValid} initialValue = {formState.input.description.value} />
                <Button type = "submit" disabled = {!formState.isValid}>Update Place</Button>
            </form>
        </div>
    )
}
