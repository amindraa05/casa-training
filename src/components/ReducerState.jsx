import React, { useEffect, useReducer, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  counter: 0,
  loading: false,
  name: "",
};

const actions = {
  INCREMENT: "increment",
  SET_NAME: "set_name",
  SET_LOADING: "set_loading",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case actions.SET_NAME:
      return { ...state, name: action.payload };
    case action.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const ReducerState = () => {
  // const [state, dispatch] = useReducer(counterReducer, initialState);
  // const { counter, name } = state;
  // const { loading } = state;

  // console.log({ state });

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   console.log(inputRef.current);
  // }, [inputRef.current]);

  // const debounceRef = useRef(null);

  // const onChange = (e) => {
  //   if (debounceRef.current) clearTimeout(debounceRef.current);
  //   debounceRef.current = setTimeout(() => {
  //     dispatch({ type: actions.SET_NAME, payload: e.target.value });
  //     console.log(e.target.value);
  //   }, 800);
  // };
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  console.log(count);
  return (
    <div>
      {/* <Input size="md" label="Masukan Nama" onChange={onChange} />
      <p>{counter}</p>
      <p>{name}</p>
      <Button
        onClick={() => {
          dispatch({ type: actions.INCREMENT });
        }}
      >
        Tambah Dengan Reducer
      </Button> */}
      <h1>Counter</h1>
      <p>{counter}</p>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      ></button>
    </div>
  );
};
