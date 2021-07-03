import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [singleData, setSingleData] = useState([]);

    const url = `https://api.spotify.com/v1/search?q=`;
    const token = 'BQDeGEzJbhpfRiN9KYuV2DWzn8AiiAo3sZcq9AwX89WenqYDWYCnXnk_aYL7n_TfMI1dLyXN_FZZhTEPK9cV0pNynkLTkebGMXgWZ-C4VivmI4WE_52uTc1OnbIkPpQomE_P-DiqO66ierM6EUho0AIUeIHhw1Q';
    const type = 'track%2Cartist%2Calbum';
    const limit = 5;

    // const singleUrl = `https://api.spotify.com/v1/albums/`;

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${url}${query}&type=${type}&limit=${limit}`, {
                headers: { Authorization: 'Bearer ' + token },
            });
            setData(response.data);
        } catch (e) {
            console.log(e);
            alert('Data not found');
        }
    };

    const fetchSingleData = async (url, id) => {
        // e.preventDefault();
        try {
            const response = await axios.get(url, id, {
                headers: { Authorization: 'Bearer ' + token },
            });
            setSingleData(response);
        } catch (e) {
            console.log(e);
            alert('Data not found');
        }
    };

    useEffect(() => {
        console.log('data updated');
    }, [data]);

    return <ApiContext.Provider value={{ query, setQuery, data, fetchData, fetchSingleData, singleData }}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => {
    return useContext(ApiContext);
};
