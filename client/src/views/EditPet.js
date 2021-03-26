import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const EditPet = props => {
    const { id } = props;
   
    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDesc: "",
        petSkill1: "",
        petSkill2: "",
        petSkill3: "",
    });

    const  [errors, setErrors] = useState({
        petName: null,
        petType: null,
        petDesc: null
    });

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => setPet(response.data.results))
            .catch(err => console.log(err))
    },[])

    const changeHandler = e => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });
    }
    
    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/pets/${id}`, pet)
            .then(response => {
                if(response.data.message === 'success'){
                    navigate(`/pets/${id}`);
                }
                else {
                    setErrors(response.data.errors);
                }
            })
    }

    return (
        <>
        <h2> Edit: {pet.petName}</h2>
        <Link to='/'>back to home</Link>
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group row">
                    {
                        errors.petName ?
                        <span className="col-sm-12">{errors.petName.message}</span>
                        : ''
                    }
                    <label htmlFor="petName" className='col-sm-4'>Pet Name: </label>
                    <input type="text" name="petName"  onChange={e => changeHandler(e)} className='col-sm-8 form-control' value={pet.petName}/>
                </div>
                <div className="form-group row">
                    {
                        errors.petType ?
                        <span className="col-sm-12">{errors.petType.message}</span>
                        : ''
                    }
                    <label htmlFor="petType" className='col-sm-4'>Pet Type: </label>
                    <input type="text" name='petType' value={pet.petType} onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    {
                        errors.petDesc ?
                        <span className="col-sm-12">{errors.petDesc.message}</span>
                        : ''
                    }
                    <label htmlFor="petDesc" className='col-sm-4'>Pet Description: </label>
                    <input type="text" name='petDesc'value={pet.petDesc} onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    <label htmlFor="petSkill1" className='col-sm-4'>Skill 1: </label>
                    <input type="text" name='petSkill1' value={pet.petSkill1} onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    <label htmlFor="petSkill2" className='col-sm-4'>Skill 2: </label>
                    <input type="text" name='petSkill2' value={pet.petSkill2} onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    <label htmlFor="petSkill3" className='col-sm-4'>Skill 3: </label>
                    <input type="text" name='petSkill3' value={pet.petSkill3} onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <input type='submit' value='Edit Pet' className='btn btn-primary'/>
            </form>
        </div>
        </>
    )
}

export default EditPet
