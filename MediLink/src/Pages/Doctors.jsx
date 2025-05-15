import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Doctors = () => {
  const navigate = useNavigate()
  const { speciality } = useParams()
  const [filterDoc, setfilterDoc] = useState([])
  const[Showfilter, setshowFilter] = useState(false)
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setfilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setfilterDoc(doctors)
    }

  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialists.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${Showfilter ? 'bg-primary text-white' : ''}`} onClick={()=>setshowFilter(prev => !prev)}>Filter</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${Showfilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : 'General physician'}`}>General physician</p>

          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : 'Gynecologist'}`}>Gynecologist</p>

          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : 'Dermatologist'}`}>Dermatologist</p>

          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : 'Pediatricians'}`}>Pediatricians</p>

          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : 'Neurologist'}`}>Neurologist</p>

          <p onClick={() => speciality === 'Gastroentorologist' ? navigate('/doctors') : navigate('/doctors/Gastroentorologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all  cursor-pointer ${speciality === 'Gastroentorologist' ? 'bg-indigo-100 text-black' : 'Gastroentorologist'}`}>Gastroentorologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index) => (
              <div onClick={() => navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500': 'text-gray-400'} `}>
                <p className={`w-2 h-2 ${item.available ? ' bg-green-500' :'bg-gray-500'} rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available'}</p>
              </div>
                  <p className='text-gray-900 text text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors