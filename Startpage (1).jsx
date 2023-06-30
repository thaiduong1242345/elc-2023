import React, { useState } from 'react'

function Input({ placeholder }) {

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
                />
            </div>
        </div>
    )
}

function Button({ title }) {
    const [isHover, setIsHover] = useState(false)

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

function Startpage() {
    // console.log('hello')
    const [isShow, setIsShow] = useState(false)
    return (
        <div className='h-screen w-screen bg-gradient-to-r from-[#A48ED3] to-[#FBC2EA] p-4 flex flex-col justify-center items-center'>
            <img src="./images/ELC.png" alt="" className="max-w-[250px]" />

            {isShow ? (
                <div className="container mx-auto max-w-xl flex flex-col items-center transition-all">
                    <div className="max-w-md w-full flex flex-col gap-6">
                        <Input placeholder={'Fill your name'} />
                        <Input placeholder={'Fill your school'} />
                        <Button title={'START'} />
                    </div>
                </div>
            ) : (
                <div className="relative cursor-pointer transition-all" onClick={() => { setIsShow(true) }}>
                    <div className="px-14 py-4 bg-white rounded-2xl w-fit font-bold text-xl text-[#794fd1] z-20">START</div>
                    <div className="px-14 py-4 bg-white rounded-2xl w-fit font-bold text-xl text-[#794fd1] z-10 absolute animate-ping top-0">START</div>
                </div>
            )}
        </div>
    )
}

export default Startpage