import React, {useState, useEffect} from 'react'
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const NewPet = () => {
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

    const changeHandler = e => {
    
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        });

    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', pet)
            .then(response => {
                if(response.data.message === 'error'){
                    setErrors(response.data.errors);
                }
                else {
                    navigate('/');
                }
            })
    }
    return (
        <>
        <h3>Know a pet needing a home?</h3>
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
                    <input type="text" name="petName" onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    {
                        errors.petType ?
                        <span className="col-sm-12">{errors.petType.message}</span>
                        : ''
                    }
                    <label htmlFor="petType" className='col-sm-4'>Pet Type: </label>
                    <input type="text" name='petType' onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    {
                        errors.petDesc ?
                        <span className="col-sm-12">{errors.petDesc.message}</span>
                        : ''
                    }
                    <label htmlFor="petDesc" className='col-sm-4'>Pet Description: </label>
                    <input type="text" name='petDesc' onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <h4>Skills (optional):</h4>
                <div className="form-group row">
                    <label htmlFor="petSkill1" className='col-sm-4'>Skill 1: </label>
                    <input type="text" name='petSkill1' onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    <label htmlFor="petSkill2" className='col-sm-4'>Skill 2: </label>
                    <input type="text" name='petSkill2' onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <div className="form-group row">
                    <label htmlFor="petSkill3" className='col-sm-4'>Skill 3: </label>
                    <input type="text" name='petSkill3' onChange={e => changeHandler(e)} className='col-sm-8 form-control'/>
                </div>
                <input type='submit' value='Add Pet' className='btn btn-primary'/>
            </form>
        </div>
        </>
    )
}

export default NewPet
