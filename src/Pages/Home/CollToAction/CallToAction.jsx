import React from 'react';

import calender from '../../../assets/icons/coll-to-action/icon (1).svg'
import location from '../../../assets/icons/coll-to-action/icon (2).svg'
import message from '../../../assets/icons/coll-to-action/icon (3).svg'

const CallToAction = () => {
     return (
          <section className='bg-slate-900 px-12 py-20 my-10 text-white rounded-md'>
               <div className="flex flex-1 justify-between">
                    <div className="item flex flex-1 items-center  gap-5">
                         <div className="icon">
                              <img src={calender} alt="icon" />
                         </div>
                         <div className="content">
                              <p>We are open monday-friday</p>
                              <h4 className='text-2xl'>07:00 am - 09:00 pm</h4>
                         </div>
                    </div>
                    <div className="item flex flex-1 items-center  gap-5">
                         <div className="icon">
                              <img src={message} alt="icon" />
                         </div>
                         <div className="content">
                              <p>Have a question?</p>
                              <h4 className='text-2xl'>+880 17676 03775        </h4>
                         </div>
                    </div>
                    <div className="item flex flex-1 items-center  gap-5">
                         <div className="icon">
                              <img src={location} alt="icon" />
                         </div>
                         <div className="content">
                              <p>Need a repair? our address</p>
                              <h4 className='text-2xl'>Panchagerh Dhaka, Bangladesh</h4>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default CallToAction;