import React from 'react'
import { useParams } from "react-router-dom";

import { PlaceList } from '../Components/PlaceList'

export const UserPlaces = () => {

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

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)

    return (
        <PlaceList items = {loadedPlaces}/>
    );
}
