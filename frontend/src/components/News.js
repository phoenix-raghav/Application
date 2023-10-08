import React, { useEffect } from 'react'
import { newsItems } from './HelperFunc';
function News() {
    let start = 0;
    useEffect(()=>{
        toggleNewsItems();
    },[])
    const toggleNewsItems = (direc) =>{
        Array.from(document.getElementsByClassName('newsItems')).forEach(element=>{
            element.remove();
        })
        if(direc == 'forward')
            document.querySelector('#backward div').style.display='block';
        if(direc == 'backward')
            document.querySelector('#forward div').style.display='block';
        start = direc == 'backward' ? (Math.floor((start-1)/4)-1)*4: start;
        const end = start+4;
        while(start<end && start<newsItems.length)
        {
            const box = document.createElement('div');
            box.setAttribute('class','newsItems');
            const img = document.createElement('img');
            img.setAttribute('src',newsItems[start].img);
            img.setAttribute('alt','Error loading Image');
            const p = document.createElement('p');
            p.append(newsItems[start].heading.slice(0,50) + ' .....');
            box.appendChild(img);
            box.appendChild(p);
            document.getElementById('newsBox').appendChild(box);
            start++;
        }
        if(start==newsItems.length)
            document.querySelector('#forward div').style.display='none';
        if(start==4)
            document.querySelector('#backward div').style.display='none';
    }
  return (
    <>
        <div id='News'>
            <div id='backward' className='newsBtn'>
                <div>
                    <button onClick={()=>{toggleNewsItems('backward')}}>&lt;</button>
                </div>
            </div>
            <div id="newsBox">
                <div className="newsItems">
                    <img src={process.env.PUBLIC_URL + './Transfer.jpeg'} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, dolores.</p>
                </div>
                <div className="newsItems">2</div>
                <div className="newsItems">3</div>
                <div className="newsItems">4</div>
            </div>
            <div id='forward' className='newsBtn'>
                <div>
                    <button onClick={()=>{toggleNewsItems('forward')}}>&gt;</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default News
