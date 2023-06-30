import React, { useState, useRef } from 'react'
import '@mui/material'
import { Checkbox } from '@mui/material'
import Select from 'react-select'
import Swal from 'sweetalert2'
import { ForkLeft, Margin } from '@mui/icons-material'

const Puzzle = () => {
    const [isFocus, setIsFocus] = useState(false)
    const inputRef = useRef(null)
    return (
<div className='h-screen w-screen bg-gradient-to-r from-[#A48ED3] to-[#FBC2EA] p-4 flex flex-col justify-center items-center'>
<div className="container mx-auto max-w-xl flex flex-col items-center transition-all">
<div className="max-w-md w-full flex flex-col gap-6">
<div className='container mx-auto md:mx-auto flex flex-col items-center m-1 bg-white rounded-md'>
<div className='container flex justify-center inline-block items-center'>
<img src="./../../src/assets/ELC.png" alt="" className='py-0 items-center' width={100} height={100} />
<div className='font-semibold text-lg text-black'>Decryption</div>
</div>
<div className='text-black items-center font-semibold text-lg'>Solve it!</div>
    <div className=''>
        <img src="../../src/assets/D1.png" className='flex object-contain' width={450} height={450}></img>
    </div>
    <div className="">
            <div
                className={`px-3 py-3 mt-2 transition-all duration-300 bg-white rounded-xl relative ring-[#794fd1]`}
                style={isFocus ? {
                    boxShadow: '0px 0px 20px 0px #FFF'
                } : {}}
            >
                <input
                    ref={inputRef}
                    // onFocus={() => { setIsFocus(true) }}
                    // onBlur={() => { setIsFocus(false) }}
                    id="InputAnswer"
                    className='focus:outline-none w-full text-lg text-[#794fd1] font-semibold'
                    type="text"
                    placeholder={"Enter your answer..."}
                />
            </div>
        </div>
    <form onSubmit={`${Swal.fire({
                title: 'Are you sure to submit your answer?',
                text: `You won't be able to revert this!\nYour current answer: ${inputRef.current}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#FF0000',
                confirmButtonText: 'Confirm',
            }).then((result) => {
                if(result.isConfirmed) {
                    Swal.fire(
                        'Success!',
                        'Your answer have been saved!',
                        'success'
                    )
                }
            })}`}>
    <button  className='bg-[#AF8CFF] rounded-xl p-3 text-lg font-semibold text-white flex flex-row justify-center w-full cursor-pointer basis-1/ transition-all duration-300'>Submit your answer</button>
    </form>

</div>
</div>
</div>

    </div>
    )
            }
export default Puzzle