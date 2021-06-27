import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddList, remove, setcheckboxes } from '../action';
import './todolist.css';
const ToDoList = () => {
    const container: any = useSelector(state => state);
    const dispach = useDispatch();
    const [input, setinpt] = useState<string>('')
    const onChangeInput = (e: any) => {
        setinpt(e.target.value)
    }
    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            dispach(AddList(input))
        }
    }
    const deleteItem = (item: string) => {
        dispach(remove(item))

    }
    const onChangeChekboxs = (item: string) => {
        dispach(setcheckboxes(item))
    }
    return (
        <div className="contaner">
            <div>
                <input onKeyPress={handleKeyPress} onChange={onChangeInput} />
                {container.map((item: any) => {
                    return (
                        <div className="left">
                            <div className="item-and-chekboxs">
                                {/* <input onClick={() => onChangeChekboxs(item)} className="checkbox" type="checkbox" /> */}
                                <li>{item.title}</li>
                            </div>
                            {/* <button onClick={() => deleteItem(item)} className="delete">Delete</button> */}
                        </div>
                    )
                })}
                <div className="text">
                    {/* <h2>{container.length - complete.length}task left</h2>
                <h2>{complete.length}task complete</h2> */}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ToDoList;