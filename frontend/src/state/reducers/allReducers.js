const initialHeading = null;

export const changeHeading = (state=initialHeading, action)=>{
    switch(action.type)
    {
        case 'changeHeading': return action.payload;
        default: return state;
    }
}