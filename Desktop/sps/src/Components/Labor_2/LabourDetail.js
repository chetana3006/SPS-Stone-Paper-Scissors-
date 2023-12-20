import React, { useEffect, useState } from 'react'
import userImage from '../../assets/labour.png'
import './labourDetail.css'
import BodyTemperatureChart from './BodyTemperatureChart'
import HeartRateChart from './HeartRateChart'
import StressChart from './StressChart'
import OxygenChart from './OxygenChart'
import { useParams } from 'react-router-dom';
import axios from 'axios'
export default function LabourDetail() {
    const { id } = useParams();
    const [userdata,setuserdata]=useState([])
    // useEffect(()=>{
    //     axios.post("http://localhost:8000/u/oneuser",{"id":id}).then((res)=>{
    //         setuserdata(res.data.user);
    //         console.log(res.data.user);
    //     })
    // },[])
  return (
    <div className='h-screen w-full bg-gray-200 flex flex-row py-8'>
        <div className='h-full bg-white w-1/3 ml-8 mr-5 '>
            <div className='flex flex-col px-2 py-2'>
            {/* <h1>{id}</h1> */}
                <div className='w-full flex items-center justify-center mt-16'>
                    <img src={userImage} alt='' className='h-22 w-22 mb-4'/>

                </div>
                <div className='text-center font-semibold text-2xl font-poppins'>Sriram R S </div>
                <div className='mt-10 ml-10'>
                    <div className='flex flex-row   items-center my-3'>
                        <div className='font-medium text-xl mr-7 '>
                            <h2>Phone:</h2>
                        </div>
                        <div className=''>
                            <h2>6383797338</h2>
                        </div>
                    </div>
                    <div className='flex flex-row   items-center my-7'>
                        <div className='font-medium text-xl mr-7 '>
                            <h2>Email:</h2>
                        </div>
                        <div className=''>
                            <h2>sri@gmail.com</h2>
                        </div>
                    </div>
                    <div className='flex flex-row   items-center my-7'>
                        <div className='font-medium text-xl mr-7 '>
                            <h2>Password:</h2>
                        </div>
                        <div className=''>
                            <h2>12345678</h2>
                        </div>
                    </div>
                    <div className='flex flex-row   items-center my-7'>
                        <div className='font-medium text-xl mr-7 '>
                            <h2>Experience:</h2>
                        </div>
                        <div className=''>
                            <h2>4 Years</h2>
                        </div>
                    </div>
                    <div className='flex flex-row   items-center my-7'>
                        <div className='font-medium text-xl mr-7 '>
                            <h2>Expertise:</h2>
                        </div>
                        <div className=''>
                            <h2>6383797338</h2>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        <div className='h-full bg-white w-full mr-8'>
            <div className='lab-detail-gra-top'>
                <div className='lab-detail-gra-1'>
                <h1 className='lab-detail-head'>Stress And Fatique Levels</h1>
                <StressChart/>
                    
                </div>
                <div className='lab-detail-gra-2'>
                    <h1 className='lab-detail-head'>Body Temperature</h1>
                    <BodyTemperatureChart/>

                </div>
                
            </div>
            <div className='lab-detail-gra-bottom'>
                <div className='lab-detail-gra-3'>
                    <h1 className='lab-detail-head'>Oxygen Chart</h1>
                    <OxygenChart/>
                    
                </div>
                <div className='lab-detail-gra-4'>
                <h1 className='lab-detail-head'>Heart Rate</h1>
                    <HeartRateChart/>
                </div>
            </div>
        </div>
    </div>
  )
}