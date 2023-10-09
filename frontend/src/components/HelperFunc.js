
export async function authFunc (endpoint, isSignUp,nav){
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
            nav('/user')
        }
    }
    catch{
        console.log('Internal Server Error');
        alert('Internal Server Error')
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