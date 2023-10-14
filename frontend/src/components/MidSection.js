import React from 'react'
import {adArr} from './HelperFunc.js'

function MidSection() {
  let count=1;
  setInterval(()=>{
    if(document.getElementById('image'))
    {
      document.getElementById('image').src=adArr[count%4];
      count++;
    }
  },2000)
  return (
    <>
        <div id='MidSec'>
            <div id="MsLeftSec">
                <h1 className='textCenter'>Announcements</h1>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Press Release / Media Release (Revised)</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Press Release / Media Release</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Credit Rating</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-in dia-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Appointment of Statutory Auditor/s</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Change in Management</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Sale Of Shares In MSP Steel & Power Limited</li></a></p>
                <p><a href="https://www.cnbctv18.com/economy/rbi-mpc-reserve-bank-of-india-gdp-inflation-policy-implications-17969381.htm" target='_blank'><li>State Bank of India - Announcement under Regulation 30 (LODR)-Analyst / Investor Meet - Outcome</li></a></p>
                <marquee className='marquee'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum itaque adipisci fugiat, aspernatur perferendis veniam. Esse labore, commodi perspiciatis officia deserunt quod ex dolor veniam nobis nihil inventore totam eaque, aut aliquam dicta animi quis cumque a? Aliquid quaerat pariatur repudiandae odio rerum quod, sunt nesciunt laudantium natus ipsam fuga? Obcaecati, maiores tempora pariatur optio distinctio ipsa iusto sequi aliquid amet quas similique earum velit debitis est vitae esse a perferendis? Quis molestiae doloremque quidem. Cupiditate molestiae voluptate laboriosam voluptas molestias facere rerum ea maiores dolorum maxime, dolor laborum ut reprehenderit sit animi. Aliquam, nemo. Odio id minima quaerat?</marquee>
            </div>
            <div id="MsRightSec">
                <div>
                  <img id='image' src={adArr[0]} alt="Error loading Image" />
                  <p className='noSpacing' id='advertisement'>Advertisement</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default MidSection
