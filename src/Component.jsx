import React, { useState } from 'react'
import axios from 'axios'

const Component = () => {



    const [data, setData] = useState([])

    const datas = axios.get('https://sore-plum-elephant-ring.cyclic.app/api/admin').then((res) => {
        console.log(res.data);
        console.log(datas);
        setData(res.data)
    }).catch((err) => console.log(err))


    return (
        <section className='flex flex-col justify-center items-center gap-6 p-6'>
            {
                data.map((entry) => {
                    return <div key={entry.id} className='border-2 flex items-center justify-between p-8 bg-slate-400 gap-10 w-[980px] rounded-md shadow-lg'>
                        <div className='flex-1'>
                            <p className='text-gray-900 text-[40px] font-[500]'>Name : {entry.name}</p>
                            <p className='text-gray-900'>Email : <a href="">{entry.email}</a></p>
                            <p className='text-gray-900'>Phone number : {entry.mobile}</p>
                            <p className='text-gray-900'>College name : {entry.college}</p>
                            <p className='text-gray-900'>Year : {entry.year}</p>
                            <p className='text-gray-900'>Scholar number : {entry.scholar_no}</p>
                            <p className='text-gray-900'>Address : {entry.address}</p>
                            <p className='text-gray-900'>Quantity : {entry.quantity}</p>
                            <p className='text-gray-900'>Amount : {entry.amount}.00/-</p>
                        </div>
                        <div className='flex-2'>
                            <img src={entry.img_url} alt="" className='h-[300px]' />
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default Component