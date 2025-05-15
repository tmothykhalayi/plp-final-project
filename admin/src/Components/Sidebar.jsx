import React, { useContext } from 'react'
import { AdminContext } from '../Context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import {DoctorContext} from '../Context/DoctorContext.jsx'

const Sidebar = () => {
    const{aToken}  =useContext(AdminContext)
    const{dToken}  =useContext(DoctorContext)
  return (
    <div className='mih-h-screen bg-white  border-r'>
{
    aToken && <ul className='mt-5 text-[#515151'>
        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block" >Dashboard</p>
        </NavLink>

        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="" />
          < p className="hidden md:block">Appointments</p>  
        </NavLink>

        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/add-doctor'}>
            <img src={assets.add_icon} alt="" />
         <p className="hidden md:block"> Add Doctor</p>  
        </NavLink>

        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/doctor-list'}>
            <img src={assets.people_icon} alt="" />
          <p className="hidden md:block"> Doctors List</p> 
        </NavLink>
    </ul>
    
}

{
    dToken && <ul className='mt-5 text-[#515151'>
        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/doctor-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/doctor-appointments'}>
            <img src={assets.appointment_icon} alt="" />
          <p className="hidden md:block" > Appointments</p> 
        </NavLink>

       

        <NavLink className={({isActive})=> `flex items-center- gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4  border-primary': ''}`} to={'/doctor-profile'}>
            <img src={assets.people_icon} alt="" />
           <p className="hidden md:block">Profile</p>
        </NavLink>
    </ul>
    
}
    </div>
  )
}

export default Sidebar