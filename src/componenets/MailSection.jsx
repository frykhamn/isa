import React from 'react'
import Button from './Button'

export const MailSection = () => {

  return (
    <div className='cnatiner mx-auto my-36'>
      <form className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-center font-cor'>Retreats and Workshops</h1>
        <p className='text-center mt-4 font-cor font-bold'>Want to know whan I offer retreats and worskhosps? Sign up so you donät have to keep track of this site.</p>
        <div className='flex flex-col md:flex-row gap-4 mt-4'>
          <input
            type='text'
            placeholder='Full name'
            className='border-2 border-textAcc p-2 w-72'
          />
          <input
            type='email'
            placeholder='E-mail adress'
            className='border-2 border-textAcc p-2 w-72'
          />
          <Button text="Subscribe"/>
        </div>
        </form>
    </div>
  )
}
