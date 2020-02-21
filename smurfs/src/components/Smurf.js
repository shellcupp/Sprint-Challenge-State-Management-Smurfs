import React from 'react';
import {connect} from 'react-redux';
import {fetchSmurf} from '../actions';

const Smurf = props => {
    return (
        <div>
           
            
            <button onClick={props.fetchSmurf}>Get Smurfs</button>
            {/* code for fetch success */}
            {props.smurfs.map(smurf => {
                return (
                    <div className='smurfs' key={smurf.id}>
                    <h2>{smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                    </div>
                )
            }
            )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurf})(Smurf)