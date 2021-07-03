import React, { useEffect, useState } from 'react';
import { useApiContext } from '../../services/ApiContext/Api';
import { useParams } from 'react-router-dom';
const Details = () => {
    const singleUrl = `https://api.spotify.com/v1/albums/`;
    const { id } = useParams();
    const { fetchSingleData, singleData } = useApiContext();

    useEffect(() => {
        fetchSingleData(`${singleUrl}${id}`);
        console.log(singleData);
    }, [id]);

    return <div>Details</div>;
};

export default Details;
