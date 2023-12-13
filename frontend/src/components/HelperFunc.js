const makePOSTRequest = async(url,body) => {
    const params = {
        method: "POST",
        headers : {'Content-Type': 'application/json', 'authToken': localStorage.getItem('authToken')},
        body: JSON.stringify(body)
    }
    const rsp = await fetch(url,params);
    const data = await rsp.json();
    if(rsp.status==400)
        document.querySelector('.invalidDetails').innerHTML=data.msg;
    else if(rsp.status==500 || rsp.status==401)
        alert(data.msg);
    else if(rsp.status==200)
        return data;
}

export async function updateDetails (endpoint, imageURL){
    try{
        const url = 'https://application-brown-zeta.vercel.app' + endpoint;
        const body = {content : {imageURL: imageURL}}
        const data = await makePOSTRequest(url, body);
        alert(data.msg)
    }
    catch{
        console.log('Internal server error');
        alert('Internal server error')
    }
}
export async function authFunc (endpoint, isSignUp,nav, setUserDetails){
    try{
        document.querySelector('.invalidDetails').innerHTML='';
        const x = Array.from(document.querySelectorAll('.loginCredentials input'));
        const url = 'https://application-brown-zeta.vercel.app' + endpoint;
        const body =  isSignUp ? {accountNo: x[0].value, userName: x[1].value, password: x[2].value} : {userName: x[0].value, password: x[1].value};

        const data = await makePOSTRequest(url,body);
        if(!data)   return;
        alert(data.msg);
        localStorage.setItem('authToken',data.authToken);
        await setUserDetails(nav);
        nav('/user');
    }
    catch{
        console.log('Internal server error');
        alert('Internal server error')
    }
}
export async function makeTransaction(endpoint, user){
    try{
        document.querySelector('.invalidDetails').innerHTML='';
        const x = Array.from(document.querySelectorAll('.MTInputs input'));
        const url = 'https://application-brown-zeta.vercel.app' + endpoint;

        if(x[2].value>user.balance)
        {
            document.querySelector('.invalidDetails').innerHTML='Balance not sufficient';
            return;
        }    
        const body = {credAccNo: x[0].value, depAccNo: user.accountNo, credUserName: x[1].value, depUserName:user.userName, amount: x[2].value, depPassword:x[3].value}
        const data = await makePOSTRequest(url,body);
        if(!data)   return;
        alert(data.msg);
        document.querySelector('.invalidDetails').innerHTML=data.msg;
    }
    catch{
        console.log('Internal server error');
        alert('Internal server error')
    }
}
export async function getTransList(endpoint, userName, setList){
    try{
        const url = 'https://application-brown-zeta.vercel.app' + endpoint;

        const body = {userName:userName};
        const data = await makePOSTRequest(url,body);
        if(!data)   return;
        setList(data.list);
    }
    catch(err){
        console.log(err);
        alert('Internal server error')
    }
}

export async function getUser(nav){
    try{
        const url = 'https://application-brown-zeta.vercel.app/getUser';

        const params = {
            method: "POST",
            headers : {'Content-Type': 'application/json','authToken':localStorage.getItem('authToken')}
        }
        const rsp = await fetch(url,params);
        const data = await rsp.json();
        if(rsp.status==401)
        {
            nav('/login');
        }
        else if(rsp.status==200){
            return data.body;
        }
    }
    catch{
        console.log('Internal server error');
        alert('Internal server error')
    }
}

export const adArr = ['https://media.cnn.com/api/v1/images/stellar/prod/160505174531-18-coca-cola-anniversary.jpg?q=w_1600,h_900,x_0,y_0,c_fill','https://cdn.telanganatoday.com/wp-content/uploads/2022/01/29hy_7_29012022_1.jpg','https://gumlet.assettype.com/afaqs%2F2023-07%2F04227f9d-e69f-4eff-b8f0-cc023ebddc08%2FUntitled_design___2023_07_20T233411_959.png?auto=format&q=35&w=1200','https://i.ytimg.com/vi/QUoJRZgJ-ZE/maxresdefault.jpg'];

export const newsItems = [{
    img: 'https://static.toiimg.com/thumb/msid-104210024,imgsize-1695149,width-400,resizemode-4/104210024.jpg',
    heading: 'SBI PO Prelims Admit Card 2023 to release soon on sbi.co.in, how to download'
},{
    img: 'https://assets.telegraphindia.com/telegraph/2023/May/1683358470_1672660133_recruitment.jpg',
    heading: 'SBI SCO Recruitment 2023: Application deadline extended; check details inside'
},{
    img: 'https://gumlet.assettype.com/bloombergquint%2F2023-10%2F7a32bb31-fee5-4d2f-a804-da82a5960977%2FDinesh_Kumar_Khara__Chairman_at_State_Bank_of_India__SBI___during_announcement_of_Q1FY24_results__So.jpeg?rect=0%2C38%2C1049%2C590&auto=format%2Ccompress&w=576',
    heading: "SBI Chairman Dinesh Kumar Khara's Tenure Extended Till August 2024 — BQ Exclusive"
},{
    img: 'https://www.livemint.com/lm-img/img/2023/10/05/600x338/RBI_1696511066575_1696511066736.JPG',
    heading: "SBI, HDFC to ICICI: RBI enrolls 30 banks on UDGAM portal for unclaimed deposits. Full list here"
},{
    img: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2023/10/8/w900X450/Man_loses_.jpg?w=640&dpr=1.3',
    heading: 'Man loses Rs 1.35 lakh after contacting fraudulent SBI customer care number'
},{
    img: 'https://images.indianexpress.com/2023/10/A-bank-for-the-future-copy-1.jpg?w=640',
    heading: 'SBI chairman writes: The banking sector is leading the journey towards an Atmanirbhar Bharat'
},{
    img: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2023/10/8/w900X450/Man_loses_.jpg?w=640&dpr=1.3',
    heading: 'Man loses Rs 1.35 lakh after contacting fraudulent SBI customer care number'
},{
    img: 'https://images.indianexpress.com/2023/10/A-bank-for-the-future-copy-1.jpg?w=640',
    heading: 'SBI chairman writes: The banking sector is leading the journey towards an Atmanirbhar Bharat'
},{
    img: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2023/10/8/w900X450/Man_loses_.jpg?w=640&dpr=1.3',
    heading: 'Man loses Rs 1.35 lakh after contacting fraudulent SBI customer care number'
},{
    img: 'https://images.indianexpress.com/2023/10/A-bank-for-the-future-copy-1.jpg?w=640',
    heading: 'SBI chairman writes: The banking sector is leading the journey towards an Atmanirbhar Bharat'
}]