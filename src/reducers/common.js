

const initState = {
    prompt: {
        show: false,
    },
}
export default function evt(state = initState, action) {
    console.log(action)
    return state;
}
