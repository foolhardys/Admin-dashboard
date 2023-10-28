import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineSearch } from 'react-icons/ai'

const Component = () => {



    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    const datas = axios.get('https://weary-loincloth-toad.cyclic.app/api/admin').then((res) => {
        console.log(res.data);
        console.log(datas);
        setData(res.data)
    }).catch((err) => console.log(err))


    return (
        <section className='flex flex-col justify-center items-center gap-6 p-6 bg-gray-950/75 min-h-[100vh]'>
            <div className='flex items-center'>
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder='Search....'
                    onChange={(e)=> setQuery(e.target.value)}
                    className='bg-slate-200/60 border-none focus:border-slate-500 rounded-md h-[40px] w-[300px] p-4 text-black' />
                <AiOutlineSearch className='text-[34px] font-[600] text-gray-950 -translate-x-10' />
            </div>
            {
                data.filter((entry)=>entry.name.toLowerCase().includes(query) ).map((entry) => {
                    return <div key={entry.id} className='border-2 flex flex-col md:flex-row items-center justify-between p-8 bg-slate-300 gap-10 lg:w-[980px] w-full rounded-lg shadow-xl'>
                        <div className='flex-1 flex flex-col gap-2'>
                            <p className='text-gray-900 text-[30px] font-[500]'>Name : {entry.name}</p>
                            <p className='text-gray-900'>Email : <a href="">{entry.email}</a></p>
                            <p className='text-gray-900'>Phone number : {entry.mobile}</p>
                            <p className='text-gray-900'>College name : {entry.college}</p>
                            <p className='text-gray-900'>Year : {entry.year}</p>
                            <p className='text-gray-900'>Scholar number : {entry.scholar_no}</p>
                            <p className='text-gray-900 text-[18px] font-[500]'>Address : {entry.address}</p>
                            <p className='text-gray-900'>Quantity : {entry.quantity}</p>
                            <button className='p-3 bg-slate-600 rounded-md shadow-lg w-[80px] my-4 text-white text-[20px]'>{entry.size}</button>
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