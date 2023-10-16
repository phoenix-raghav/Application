export const actionHeading = (heading) =>{
    return dispatch => {
        dispatch({
            type: "changeHeading",
            payload: heading
        })
    }
}
