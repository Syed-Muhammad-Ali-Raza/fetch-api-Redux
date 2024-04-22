import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FaBeer } from 'react-icons/fa';
import { removeuser } from './store/slices/UserSlice';

const DisplayUsers = () => {

const dispatch =useDispatch();

const removeUser =(id)=>{
    console.log(id)
    dispatch(removeuser(id))
}
const data = useSelector(
    (state)=>{
        return state.users;
    }
);
console.log(data)
  return (
<>
{

    data.map(
        (current,i)=>{
            return (
            <li key={i}>{current}  <button onClick={()=>{removeUser(i)}}><FaBeer />  </button>    </li>
            
            )
        }
    )
}


</>
  )
}

export default DisplayUsers