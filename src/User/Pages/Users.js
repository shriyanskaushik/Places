import React, { useEffect, useState } from 'react'

import { UsersList } from "../Components/UsersList";
import ErrorModal from '../../Shared/Components/UIElements/ErrorModal';
import LoadingSpinner from '../../Shared/Components/UIElements/LoadingSpinner';

export const Users = () => {
    // const USERS = [
    //     {
    //         id: 1,
    //         name : 'Hrithik Roshan',
    //         image : 'data:image/jpeg;base64,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',
    //         places : 2
    //     },
    //     {
    //         id: 2,
    //         name : 'Shahrukh Khan',
    //         image : 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/14/949927-srk.jpg',
    //         places : 4
    //     }
    // ]
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setloadedUsers] = useState();



    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try{
                const response = await fetch('http://localhost:5000/api/users');

                const responseData = await response.json();

                if(!response.ok){
                    throw new Error(responseData.message);
                }

                setloadedUsers(responseData.users);
            }catch(err){
                setError(err.message);
            }
            setIsLoading(false);
        };



        sendRequest();
    },[]);

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            <ErrorModal error = {error} onClear = {errorHandler} />
            {isLoading && <div className = "center">
                <LoadingSpinner  />
            </div> }
            {!isLoading && loadedUsers && <UsersList items = {loadedUsers} />}
        </>
    )
}