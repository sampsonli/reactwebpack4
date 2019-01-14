

const initState = {
    prompt: {
        show: false,
        message: '',
        callback: () => {},
        

    }
}
export default function evt(state = initState, action) {
    switch (action.type) {
        case 'CLOSE_PROMPT' : {
            const result = { ...state };
            let prompt = {...result.prompt}
            prompt.show = false;
            result.prompt = prompt;
            return result;
        }

        case 'SHOW_PROMPT' : {
            const result = { ...state };
            let prompt = {...result.prompt}
            prompt.show = true;
            prompt.message = action.payload.message;
            prompt.callback = action.payload.callback;
            result.prompt = prompt;
            return result;
        }


        default:
            return state;
    }

}
