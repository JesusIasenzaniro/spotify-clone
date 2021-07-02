import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);

    const url = `https://api.spotify.com/v1/search?q=`;
    const token = 'BQD1cA_kWlRPFV60XTyHIRo-h0-FsiViL5nymnhCXk5KXa9ByPLHU1suODVO0qHljhW2qFrtOS7-SE05moakq3-bfPIECa9PSKG4bBNQJT-u3MY5sZjfhS6raFy__-746xfxNaB_oILbO736z59SX1QCm88qH2w';
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
    useEffect(() => {
        console.log('Tracks updated');
    }, [tracks]);

    return <ApiContext.Provider value={{ query, setQuery, tracks, fetchTracks }}>{children}</ApiContext.Provider>;
};

export const useApiContext = () => {
    return useContext(ApiContext);
};
