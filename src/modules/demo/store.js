
const initialState = {
    count: 0,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'DEMO_ADD':
            return {
                ...state,
                count: 1
            }
        default:
            return state
    }
}

export const add = () => {
    return dispatch => {
        dispatch({
            type: 'DEMO_ADD'
        })
    }
}
