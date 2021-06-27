export const AddList = (item:string) => {
return {
    type:"ADD-LIST",
    paylood:item
}
}
export const remove = (item:string) => {
    return {
        type:"REMOVE-LIST",
        paylood:item
    }
    }
    export const setcheckboxes = (item:string) => {
        return {
            type:"SET-CHECK-BOXES",
            paylood:item
        }
        }