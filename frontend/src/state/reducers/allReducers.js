const initialHeading = null;

export const changeHeading = (state=initialHeading, action)=>{
    switch(action.type)
    {
        case 'changeHeading': return action.payload;
        default: return state;
    }
}
export const disableButton = (state=true, action)=>{
    switch(action.type)
    {
        case 'enableBtn': return false;
        case 'disableBtn': return true;
        case 'check': {
            let flag = false;
            document.querySelectorAll('.'+action.items + ' input').forEach(element=>{
                if(element.value=='')
                {
                    console.log('object')
                    return flag = true;
                }
            })
            return flag;
        }
        default: return state;
    }
}
export const changeAccNo = (state=null, action)=>{
    switch(action.type)
    {
        case 'setAccNo': return action.accNo;
        default: return state;
    }
}