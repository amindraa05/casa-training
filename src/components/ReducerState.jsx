import React, { useEffect, useReducer, useRef } from 'react'
import { Button } from '@material-tailwind/react'
import { Input } from "@material-tailwind/react";

const initialState = {
    counter: 0,
    name: ""
}

const actions = {
    INCREMENT: "increment",
    SET_NAME: "set_name"
}

const counterReducer = (state, action) => {
    switch (action.type) {
        case actions.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case actions.SET_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }
}

export const ReducerState = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    const { counter, name } = state

    const inputRef = useRef(null)

    useEffect(() => {
        console.log(inputRef.current);
    }, [inputRef.current])

    const debounceRef = useRef(null)

    const onChange = (e) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            dispatch({ type: actions.SET_NAME, payload: e.target.value });
            console.log(e.target.value);
        }, 800)
        
    }
    return (
        <div>
            <Input size="md" label="Masukan Nama" onChange={onChange} />
            <p>{counter}</p>
            <p>{name}</p>
            <Button onClick={() => { dispatch({ type: actions.INCREMENT }); }}>Tambah Dengan Reducer</Button>
        </div>
    )
}