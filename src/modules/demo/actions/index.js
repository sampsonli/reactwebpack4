import {CHANGE_COLOR} from './types';

export function changeRed() {
    const color = 'red';
    return (dispatch) => dispatch({type: CHANGE_COLOR, payload: color});
}
export function changeBlue() {
    const color = 'blue';
    return (dispatch) => dispatch({type: CHANGE_COLOR, payload: color});
}
