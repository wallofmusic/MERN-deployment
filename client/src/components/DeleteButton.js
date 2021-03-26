import axios from 'axios';
import React, {useState} from 'react';
import { navigate } from '@reach/router';

const DeleteButton = props => {
    const { id, pet } = props;
    
    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(response => navigate('/'))
            .catch(err => navigate('/'))
    }
    return (
        <div>
            <button type="button" className="btn btn-danger col-sm-3" onClick = {deletePet}>Adopt {pet.petName} </button>
        </div>
    )
}

export default DeleteButton
