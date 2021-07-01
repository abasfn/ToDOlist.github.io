import { ToDoItem } from "../models/i";

export const reduser = (state: ToDoItem[] = [], action: any) => {
    if (action.type === "ADD-LIST") {
        // debugger;
        state = [...state, action.paylood]
        return state;
    }
    else if (action.type === "REMOVE-LIST") {
        // debugger;
        state = state.filter((item: ToDoItem) => item != action.paylood)
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
    return [...state]
}
