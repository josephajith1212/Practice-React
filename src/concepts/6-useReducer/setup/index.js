import React, {useState, useEffect, useRef, useReducer} from 'react'
import Modal from './Modal'
import {data} from '../../../data'
import {reducer} from './reducer'


const defaultState = {
    people: data,
    showModal: false,
    modalContent: '',
}

const Index = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)
    // useEffect(()=>{
    //     setTimeout(()=>{dispatch({type:"closeModal"})},2000)
    // }, [state.showModal])
    const closeModal = () => dispatch({type:"closeModal"})
    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            const newItem = {id: Date.now(), name}
            dispatch({type:"testing", payload: newItem})
            setName('')
        }else{
            dispatch({type: "noEntry"})
        }
    }
    const refInput = useRef(null)
    useEffect(()=>{
        refInput.current.focus()
    })
    return (
        <>
            {state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' ref={refInput} value={name} onChange={(e) => {setName(e.target.value)}} />
                <button>add</button>
            </form>
            {state.people.map((person)=>{
                return (
                    <div key={person.id} className='item'>
                        <h4>{person.name}</h4>
                        <button onClick={()=>dispatch({type:"removeItem", payload:person.id})}>remove</button>
                    </div>
                )
            })}
        </>
    )
}

export default Index