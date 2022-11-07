import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ResidentInfo = ({ url }) => {

    const [characterInfo, setCharacterInfo] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacterInfo(res.data))
    }, [])



    return (
        <div className='cardInfo'>
            <img className='imagesCard' src={characterInfo.image} alt="" />
            <div>
                Name: {characterInfo.name}
                <br />
                <div className='status' >
                    <div className={`${characterInfo.status === "Alive" ? 'green' : characterInfo.status === 'Dead' ? "red" : "gray"} fa-circle`} ></div>
                    <h4>
                        {characterInfo.status}
                    </h4>
                </div>
                Origin: {characterInfo.origin?.name}
                <br />
                episodes where appear: {characterInfo.episode?.length}
            </div>
        </div>
    );
};

export default ResidentInfo;