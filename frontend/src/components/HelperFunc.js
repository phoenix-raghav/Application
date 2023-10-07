export async function authFunc (endpoint, isSignUp){
    try{
        document.querySelector('.invalidDetails').innerHTML='';
        const x = Array.from(document.querySelectorAll('.loginCredentials input'));
        const url = 'http://127.0.0.1:8080' + endpoint;
        const body =  isSignUp ? {accountNo: x[0].value, userName: x[1].value, password: x[2].value} : {userName: x[0].value, password: x[1].value};

        const params = {
            method: "POST",
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }
        const rsp = await fetch(url,params);
        const data = await rsp.json();  
        if(rsp.status==400)
            document.querySelector('.invalidDetails').innerHTML=data.msg;
        if(rsp.status==500)
            alert(data.msg);
        if(rsp.status==200)
        {
            alert(data.msg);
            window.location.pathname = '/';
        }
    }
    catch{
        console.log('Internal Server Error');
    }
}