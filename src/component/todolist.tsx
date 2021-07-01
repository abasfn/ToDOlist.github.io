import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddList, remove, setcheckboxes } from '../action';
import { ToDoItem } from '../models/i';
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
            const initialState: ToDoItem = { title: input, complete: false }
            dispach(AddList(initialState))
            setinpt('')
        }
    }
    const deleteItem = (index: any) => {
        dispach(remove(index))
    }
    const onChangeChekboxs = (index: any) => {
        dispach(setcheckboxes(index))
    }
    const complete = () => {
        return container.filter((item: any) => item.complete === true);
    }
    return (
        <div className="contaner">
            <div>
                <input value={input} onKeyPress={handleKeyPress} onChange={onChangeInput} />
                {container.map((item: any, index: any) => {
                    return (
                        <div className="left">
                            <div className="item-and-chekboxs">
                                <input checked={item.complete} onClick={() => onChangeChekboxs(index)} className="checkbox" type="checkbox" />
                                {item.complete === true ? <li><del>{item.title}</del></li>
                                    : <li>{item.title}</li>}
                            </div>
                            <button onClick={() => deleteItem(item)} className="delete">Delete</button>
                        </div>
                    )
                })}
                <div className="text">
                    <h2>{container.length - complete().length}task left</h2>
                    <h2>{complete().length}task complete</h2>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default ToDoList;