import React, {useState} from 'react';

const AddSmurfForm = props => {
    const initialState = {
        name: '',
        age: '',
        height: '',
    id: Date.now()    
}

const [newSmurf, setNewSmurf] = useState(initialState)

const handleChanges = e => {
    setNewSmurf({
        ...newSmurf,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    props.postNewSmurf(newSmurf);
    setNewSmurf(initialState)
}

return (
<div>
    <h2>Add New Smurf</h2>
    <form onSubmit={handleSubmit}>
        <input
         type='text'
         name='name'
         placeholder='Name'
         value={newSmurf.name}
         onChange={handleChanges}
        />
         <input
         type='text'
         name='age'
         placeholder='Age'
         value={newSmurf.age}
         onChange={handleChanges}
        />
         <input
         type='text'
         name='height'
         placeholder='Height'
         value={newSmurf.height}
         onChange={handleChanges}
        />
        <button type='submit'>Add Smurf</button>
    </form>
</div>
)
}
export default AddSmurfForm