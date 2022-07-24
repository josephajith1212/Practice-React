import React, {useState, useReducer, useEffect, useRef} from 'react';
import Modal from './Modal';
import {data} from '../../../data';

// reducer function
const reducer = (state, action) => {
    if (action.type === "testing"){
        return {...state, people:[...state.people, action.payload], isModalOpen:true, modalContent:"item added"}
    }
}
const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: 'hello modal',
}

const Index = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)
    const refInput = useRef(null)
    useEffect((e)=>{
        refInput.current.focus()
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            const newItem = {id: Date.now(), name}
            dispatch({type: "testing", payload: newItem})
            setName('')
        } else {
        }
    }
    return (
        <>
            {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type='text' ref={refInput} value={name} onChange={(e) => setName(e.target.value)} />
                    <button type='submit'>Add</button>
                </div>
            </form>
            {state.people && state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                    </div>
                )
            })}
        </>
    )
};

export default Index;
