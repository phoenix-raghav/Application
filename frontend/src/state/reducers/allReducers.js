const initialHeading = null;
const initialMode = {
    mode : 'light',navBg: 'bg-light', nav: 'navbar-light', navText: 'text-bg-light' 
};

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
export const changeMode = (state=initialMode, action)=>{
    switch(action.type)
    {
        case 'dark': {
            document.body.style.backgroundColor = 'rgb(234, 201, 234)';
            document.body.style.color = 'black';
            return {
                mode : 'light',navBg: 'bg-light', nav: 'navbar-light', navText: 'text-bg-light' 
            };
        }
        case 'light': {
            document.body.style.backgroundColor = '#393737';
            document.body.style.color = 'white';
            return {
                mode : 'dark',navBg: 'bg-dark', nav: 'navbar-dark', navText: 'text-bg-dark' 
            };
        }
        default: return state;
    }
}
export const userDetails = (state=null, action)=>{
    switch(action.type)
    {
        case 'setUserDetails': return action.payload ? action.payload : null;
        default: return state;
    }
}