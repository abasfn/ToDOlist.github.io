
const initialState: any = [
    { title: "", complete: false }
]
export const reduser = (state = initialState, action: any) => {
    if (action.type === "ADD-LIST") {
        // const indexOf = state.data.indexOf(action.paylood)
        // if (indexOf >= 0) {
        //     return state
        // }
        state = [...state]
        state.title = action.paylood
        return state;
    }
    // else if (action.type === "REMOVE-LIST") {
    //     state.data = state.data.filter((item: any) => !action.paylood.includes(item));
    //     state.complete = state.complete.filter((item: any) => !action.paylood.includes(item));
    //     return state;
    // }
    // else if (action.type === "SET-CHECK-BOXES") {
    //     // debugger;
    //     let indexof = state.complete.indexOf(action.paylood)
    //     if (indexof >= 0) {
    //         state.complete = state.complete.filter((item: any) => !action.paylood.includes(item));
    //         return state
    //     }
    //     state.complete = [...state.complete, action.paylood];
    // }
    return state
}

