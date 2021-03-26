import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';
import {Link} from '@reach/router';

const ViewPet = props => {
    const { id } = props;
    const [pet, setPet ] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => setPet(response.data.results))
            .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <h3>Details about: {pet.petName}</h3>
            <Link to='/'>back to home</Link>
            <DeleteButton
                id = { pet._id }
                pet={ pet } 
            />
            <div>
                <p>Pet Type: {pet.petType}</p>
                <p>Pet Description: {pet.petDesc}</p>
                <p>Skills: </p>
                {
                    pet.petSkill1 ?
                    pet.petSkill1
                    :''
                }
                {
                    pet.petSkill2 ?
                    <p>{pet.petSkill2}</p>
                    :''
                }
                {
                    pet.petSkill3 ?
                    <p>{pet.petSkill3}</p>
                    :''
                }
            </div>
        </div>
    )
}

export default ViewPet
