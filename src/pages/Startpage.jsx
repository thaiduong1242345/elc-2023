import React, { useState, useRef } from 'react'
import Select from 'react-select'
import '@mui/icons-material'
import '@mui/material'
import Swal from 'sweetalert2'
import { Checkbox, FormControl, InputLabel, MenuItem } from '@mui/material'
const SchoolSelect = [
    {value: 'quangoai', label:'THPT Quảng Oai'},
    {value: 'ngoquyen', label:'THPT Ngô Quyền - Ba Vì'},
    {value: 'minhquang', label:'THPT Minh Quang'},
    {value: 'bavi', label:'THPT Ba Vì'},
    {value: 'batbat', label:'THPT Bất Bạt'},
    {value: 'dantocnoitru', label:'Trường phổ thông Dân tộc Nội trú Hà Nội'},

]
function setWithExpiry(key, value, expiration) {
    const now = new Date()

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + expiration,
    }
    localStorage.setItem(key, JSON.stringify(item))
}
function Input({ placeholder, onChange}) {

    const [isFocus, setIsFocus] = useState(false)

    return (
        <div className="">
            <span className='font-semibold text-lg text-white'>{placeholder}</span>
            <div
                className={`px-3 py-3 mt-2 transition-all duration-300 bg-white rounded-xl relative ${isFocus ? 'ring-2 ring-[#794fd1]' : ''}`}
                style={isFocus ? {
                    boxShadow: '0px 0px 20px 0px #FFF'
                } : {}}
            >
                <input
                    onFocus={() => { setIsFocus(true) }}
                    onBlur={() => { setIsFocus(false) }}
                    className='focus:outline-none w-full text-lg text-[#794fd1] font-semibold'
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}

                />
            </div>
        </div>
    )
}

function SwalFire() {
    let timerInterval;
    Swal.fire({
        title: "You will redirected to test page",
        html: ">>> <b></b> <<<",
        timer:2000,
        timerProgressBar:true,
        didOpen:() => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: ()=> {
            clearInterval(timerInterval)
        }
    })
}

function CheckWhenClickStartButton() {
    let userSchool = localStorage.getItem("username")
    console.log(userSchool)
}

function Button({ title}) {
    const [isHover, setIsHover] = useState(false)
    const CheckInfo = CheckWhenClickStartButton()
    return (
        <div
            onMouseEnter={() => {setIsHover(true)}}
            onMouseLeave={() => {setIsHover(false)}}
            style={isHover ? {boxShadow: '0px 0px 20px 0px #A78FD3'} : {}}
            className="bg-[#AF8CFF] rounded-xl p-3 text-lg font-semibold text-white flex flex-row justify-center cursor-pointer transition-all duration-300"
        >
            {title}
        </div>
    )
}
function RIF() {
    return (
        <div className='text-white items-center font-semibold text-lg'>
            <Checkbox></Checkbox>
            Remember my information
        </div>

    )
}


function Startpage() {
    // console.log('hello')
    const [message, setMessage] = useState('');
    const [school, setSchool] = useState('')
    const [isShow, setIsShow] = useState(false)
    const handleChange = event => {
      setMessage(event.target.value);
      console.log('value is:', event.target.value);
      setWithExpiry('username', event.target.value, 9999999999)
    };
    const handleChange2 = event => {
        setMessage(event.target.value);
        console.log('value is:', event.target.value);
        setWithExpiry('userschool', event.target.value, 9999999999)
      };
    return (
        <div className='h-screen w-screen bg-gradient-to-r from-[#A48ED3] to-[#FBC2EA] p-4 flex flex-col justify-center items-center'>
            <img src="./../../src/assets/ELC.png" alt="" className="max-w-[250px]" />

            {isShow ? (
                <div className="container mx-auto max-w-xl flex flex-col items-center transition-all">
                    <div className="max-w-md w-full flex flex-col gap-6">
                        <div className='InputName'><Input placeholder={'Fill your name'} onChange={handleChange} id={'InputName'}/></div>
                        <div className='InputSchool'><Input placeholder={'Fill your school'} onChange={handleChange2} id={'InputName'}/></div>
                        <RIF></RIF>
                        <div className='0' onClick={CheckWhenClickStartButton}><Button title={'START'}/></div>
                    </div>
                </div>
            ) : (
                <div className="relative cursor-pointer transition-all" onClick={() => { setIsShow(true) }}>
                    <div className="px-14 py-4 bg-white rounded-2xl w-fit font-bold text-xl text-[#794fd1] z-20" id='0'>START</div>
                    <div className="px-14 py-4 bg-white rounded-2xl w-fit font-bold text-xl text-[#794fd1] z-10 absolute animate-ping top-0">START</div>
                </div>
            )}
        </div>
    )
}

export default Startpage