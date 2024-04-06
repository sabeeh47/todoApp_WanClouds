import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import { Button, Input, Space } from 'antd';
import './SearchInput.css';
import { addToDoItem} from '../features/listSlice';

function SearchInput() {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState()

    const handleKeyDown = (e) => {
        if(e.key === 'Enter')
        {
            handleClick()
        }
    }

    const handleClick = () => {
        if(!searchValue)
        {
            alert("Please Enter Something in the Text Field")
        }
        else{
            dispatch(addToDoItem(searchValue))
            setSearchValue('')
        }
    }

    return (
        <div className='searchInput'>
            <div className='searchInputInner'>
                <h2>TODO List</h2>
                <Space.Compact style={{ width: '100%', alignItems:'center' }}>
                    <Input style={{height:50}} value={searchValue} placeholder="Add to Todo List" onKeyDown={(e) => {handleKeyDown(e)}} onChange={(event) => setSearchValue(event.target.value)}/>
                    <Button onClick={handleClick} style={{ background: "green", height:50 }} type="primary" color='green'>Submit</Button>
                </Space.Compact>
            </div>
        </div>
    )
}

export default SearchInput