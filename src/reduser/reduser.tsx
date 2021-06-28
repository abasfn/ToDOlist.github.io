
const initialState: any = [
    { title: "", complete: false }
]
export const reduser = (state: any = [], action: any) => {
    if (action.type === "ADD-LIST") {
        // const indexOf = state.data.indexOf(action.paylood)
        // if (indexOf >= 0) {
        //     return state
        // }
        state = [...state, ...action.paylood]
        return state;
    }
    else if (action.type === "REMOVE-LIST") {
        // debugger;
        state = state.filter((item: any) => item != action.paylood)
        return state;
    }
    else if (action.type === "SET-CHECK-BOXES") {
        // debugger;
        let indexof = state[action.paylood].complete
        if (indexof === true) {
            state[action.paylood].complete = false
            return [...state]
        }
        state[action.paylood].complete = true
        return [...state]
    }
    return state
}

