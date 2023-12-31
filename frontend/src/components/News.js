import React, { useCallback, useEffect, useState } from 'react'
import { newsItems } from './HelperFunc';

function News() {
    let start = 0;
    const [noOfItems,usenoOfItems] = useState(4);

    useEffect(()=>{
        toggleNewsItems();
        window.addEventListener('resize',(e)=>{
            if(e.target.innerWidth>=1256)
                usenoOfItems(4);
            else if(e.target.innerWidth>=756)
                usenoOfItems(3);
            else if(e.target.innerWidth>=500)
                usenoOfItems(2);
            else if(e.target.innerWidth>=350)
                usenoOfItems(1);
        })
    });



    const toggleNewsItems = useCallback((direc) =>{
        Array.from(document.getElementsByClassName('newsItemsLinks')).forEach(element=>{
            element.remove(); 
        })
        if(direc == 'forward')
            document.querySelector('#backward div').style.display='block';
        if(direc == 'backward')
            document.querySelector('#forward div').style.display='block';
        start = direc == 'backward' ? (Math.floor((start-1)/noOfItems)-1)*noOfItems: start;
        const end = start+noOfItems;
        while(start<end && start<newsItems.length)
        {
            const link = document.createElement('a');
            link.setAttribute('href','https://www.hindustantimes.com/education/employment-news/sbi-po-2023-admit-card-likely-next-week-steps-to-download-from-sbicoin-101696744293004.html');
            link.setAttribute('target','_blank');
            link.setAttribute('class','newsItemsLinks');
            const box = document.createElement('div');
            box.setAttribute('class','newsItems');
            const img = document.createElement('img');
            img.setAttribute('src',newsItems[start].img);
            img.setAttribute('alt','Error loading Image');
            const p = document.createElement('p');
            p.append(newsItems[start].heading.slice(0,50) + ' .....');
            box.appendChild(img);
            box.appendChild(p);
            link.appendChild(box);
            document.getElementById('newsBox').appendChild(link);
            start++;
        }
        if(start==newsItems.length)
            document.querySelector('#forward div').style.display='none';
        if(start==noOfItems)
            document.querySelector('#backward div').style.display='none';
    })

  return (
    <>
        <div id='News'>
            <div id='backward' className='newsBtn'>
                <div>
                    <button onClick={()=>{toggleNewsItems('backward')}}>&lt;</button>
                </div>
            </div>
            <div id="newsBox"></div>
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
