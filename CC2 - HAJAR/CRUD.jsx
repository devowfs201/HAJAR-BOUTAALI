import React, { useReducer, useState } from 'react';

const initialState = { items: [] };

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] };
        case 'EDIT_ITEM':
            return {
                ...state, items: state.items.map((item) => item.id === action.payload.id ? { ...action.payload } : item )
            };
        case 'DELETE_ITEM':
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
}

function CRUD() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [item, setItem] = useState({ id: '', name: '', uName: '', email: '', details: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const handleAddItem = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...item, id: Date.now() } });
        setItem({ id: '', name: '', uName: '', email: '', details: '' });
    };

    const handleDeleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id });
    };

    const handleEditItem = (item) => {
        setIsEditing(true);
        setCurrentId(item.id);
        setItem(item);
    };

    const handleUpdateItem = () => {
        setIsEditing(false);
        dispatch({ type: 'EDIT_ITEM', payload: item });
        setCurrentId(null);
        setItem({ id: '', name: '', uName: '', email: '', details: '' });
    };

    const handleViewItem = (item) => {
        alert(`Name: ${item.name}\nUser: ${item.uName}\nDetails: ${item.details}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Items Management</h1>

            <div className="mb-4">
                <input type="text" className="form-control mb-2" placeholder="Name" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} />
                <input type="text" className="form-control mb-2" placeholder="User Name" value={item.uName} onChange={(e) => setItem({ ...item, uName: e.target.value })} />
                <textarea className="form-control mb-2" placeholder="Details" value={item.details} onChange={(e) => setItem({ ...item, details: e.target.value })} ></textarea>
                <button className={`btn ${isEditing ? 'btn-warning' : 'btn-primary'} w-100`}
                    onClick={isEditing ? handleUpdateItem : handleAddItem} >

                    {isEditing ? 'Update Item' : 'Add Item'}

                </button>
            </div>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Details</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.items.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.uName}</td>
                            <td>{item.details}</td>
                            <td>
                                <button className="btn btn-success btn-sm me-2"
                                    onClick={() => handleViewItem(item)}
                                > View </button>

                                <button className="btn btn-warning btn-sm me-2"
                                    onClick={() => handleEditItem(item)}
                                > Edit </button>

                                <button className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteItem(item.id)}
                                > Delete </button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CRUD;
