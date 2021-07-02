import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const url = `https://api.spotify.com/v1/search?q=`;
    const token = 'BQCXpMXiHVpXytX2GtQ075F_Ah1pCkzQ66zyvANChVXaVZBOHdHwlwiHsu2N_cPMxeM1vCJtYlYDOtwM2Dni_NLZijNtkJ4SWnjm6q4n1nMX_y_QWPHyXm44Dr0j1mLMJStmZxBT8V7BBv6H2Tcd9UtDtfZsXMk';
    const type = 'track%2Cartist%2Calbum';
    const limit = 5;

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
    useEffect(() => {
        console.log('data updated');
    }, [data]);

    return <ApiContext.Provider value={{ query, setQuery, data, fetchData }}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => {
    return useContext(ApiContext);
};
