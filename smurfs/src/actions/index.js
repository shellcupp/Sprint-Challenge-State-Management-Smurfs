import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = 'FETCHING_SMURF_SUCCESS';
export const FETCHING_SMURF_FAIL = 'FETCHING_SMURF_FAIL';

export const fetchSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURF_START});
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log('here is the data', res.data)
        dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err =>
        dispatch({type: FETCHING_SMURF_FAIL, payload: err})
    )
}