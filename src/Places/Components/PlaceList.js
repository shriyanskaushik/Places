import React from 'react'

import Card from '../../Shared/Components/UIElements/Card';
import {PlaceItem}  from './PlaceItem';
import Button from "../../Shared/Components/FormElements/Button";
import './PlaceList.css';

export const PlaceList = (props) => {
    if(props.items.length === 0){
        return (
            <div className ="place-list center">
                <Card>
                    <h2>No place found. Maybe create one</h2>
                    <Button to = "/places/new">Share Place</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem key = {place.id} id = {place.id} image = {place.imageURL} title = {place.title} description = {place.description} address = {place.address} creatorId = {place.creatorId} coordinates = {place.location} />)}
        </ul>
    );
}
