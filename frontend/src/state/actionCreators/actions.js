export const actionHeading = (heading) =>{
    return dispatch => {
        dispatch({
            type: "changeHeading",
            payload: heading
        })
    }
}
export const enableButton = () =>{
    return dispatch => {
        dispatch({
            type: "enableBtn",
        })
    }
}
export const disableButton = () =>{
    return dispatch => {
        dispatch({
            type: "disableBtn",
        })
    }
}
export const checkButton = (items) =>{
    return dispatch => {
        dispatch({
            type: "check",
            items: items
        })
    }
}
export const setAccountNo = (accNo) =>{
    return dispatch => {
        dispatch({
            type: "setAccNo",
            accNo: accNo
        })
    }
}
export const changeMode = (mode) =>{
    return dispatch => {
        dispatch({
            type: mode,
        })
    }
}
