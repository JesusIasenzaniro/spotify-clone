import axios from 'axios';
import React, { useState, useContext } from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);

    const url = `https://api.spotify.com/v1/search?q=`;
    const token = 'BQCpOfEygqqrSD8-cphfc9Cwd0iyPOEuzxx-KA02pFfh_U6IWmrLOwTTdSMMuKQgn9WgKQKFurEL62jgIhxGhcKeiocc5g5wXgVzmLxBS0EQdkVwjdJ_xbFe2ggNRQA9FdzRHuTgEvgu0Tlgft6nIJMrJXSE4jo';
    const type = 'track';

    const fetchTracks = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${url}${query}&type=${type}`, {
                headers: { Authorization: 'Bearer ' + token },
            });
            setTracks(response.data.tracks);
        } catch (e) {
            console.log(e);
            alert('Track not found');
        }
    };
    return <ApiContext.Provider value={{ query, setQuery, tracks, fetchTracks }}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => {
    return useContext(ApiContext);
};
