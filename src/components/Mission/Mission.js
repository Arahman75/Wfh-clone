import React from 'react';
import missionImg from '../../Assests/Imgs/mision-2.jpg';
import { BiCaretRight } from "react-icons/bi";

const Mission = () => {
    return (
      <div id='mission' className='my-12'>
          <div className='grid sm-grid-cols-1 gap-8 lg:grid-cols-2'>
            <div className='flex'>
              <div className="border-l-2 border-[#0097FA] h-10"></div>
              <div>
              <h3 className='text-3xl font-bold ml-2 mb-3'>Our Mission</h3>
                <p className='text-[15px] font-normal text-gray-400 leading-6'>WFH FOUNDATION is a Non-profit Organization which is working to remove illiteracy, to make every people aware about their rights, and increasing awareness about child marriage. It also aims to ensure every human being’s participation in blood donation and make people aware about disease.</p>
              </div>
            </div>
            <div className='relative'>
            <div className='absolute mt-36 ml-60'>
                            <div class="rounded-full flex p-4 outline-1 shadow-lg relative bg-[#FFFFFF] m-3">
                          <a href="https://www.youtube.com/watch?v=qg9lbpiJCXY&ab_channel=WFHFoundation"> <BiCaretRight className='text-[#0097FA] text-2xl shadow-lg hove:duration-50'/></a>
                            </div>
                          
                        </div>
              <img src={missionImg} alt="mission-img" />
            </div>
        </div>
      </div>
    );
};

export default Mission;