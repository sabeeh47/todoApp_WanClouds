import React from 'react'
import './ListCard.css'
import { Checkbox, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import deleteGif from '../GIFs/deleteGIF.gif'
import { delToDoItem } from '../features/listSlice';

function ListComponent() {
  const todoList = useSelector(state => state.todo.value)
  const dispatch = useDispatch()

  const handleDelete = (item) => {
    console.log(item)
    dispatch(delToDoItem(item))
  }

  return (
    <div className='list'>
      <div className='listInner'>
        <List
          style={{ width: '100%', }}
          size="large"
          dataSource={todoList}
          renderItem={(item) => <List.Item actions={[<Checkbox style={{ height: 14, marginRight: 10 }} />, <img style={{ cursor: 'pointer' }} onClick={() => { handleDelete(item) }} height={25} src={deleteGif} alt='delete-icon' />]}>{item}</List.Item>}
        />

      </div>
    </div>
  )
}

export default ListComponent