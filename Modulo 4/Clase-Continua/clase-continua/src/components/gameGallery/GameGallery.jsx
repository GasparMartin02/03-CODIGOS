import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';

const GameGallery = () => {
    const [games, setGames] = useState([]);
    const getAllGames = async () => {
        try {
            const {data} = await axios.get(`${URL_BASE}/products`);
        } catch (error) {
            
        }
    };

    useEffect(() => {
        getAllGames();
    }, []);
    return (
        <Col>
            {games.map((game) => {
                return (
                    <h3>{game.name}</h3>
                )
            })}
        </Col>
    )
}

export default GameGallery;