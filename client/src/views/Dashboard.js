import React from 'react';
import {Link} from '@reach/router';
import {useEffect, useState} from 'react';
import axios from 'axios';



const Dashboard = () => {
    const [allPets, setAllPets] = useState([]);
    const [petErrors, setPetErrors] = useState({})

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(response => setAllPets(response.data.results))
            .catch(err => console.log('Something went wrong', err))
    }, []); 
    
    const deleteHandler = (id =>{
        axios.delete(`http://localhost:8000/api/pets/${id}`)
    })

    return (
        <>
            <h2>These pets are looking for a good home</h2>
            <Link to='pets/new'>add a pet to the shelter</Link>
            <div className="col-sm-12">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, idx)=>
                                <tr key={idx}>
                                    <td>{pet.petName}</td>
                                    <td>{pet.petType}</td>
                                    <td><Link to={`/pets/${pet._id}`}>Details</Link> |&nbsp;
                                        <Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard
