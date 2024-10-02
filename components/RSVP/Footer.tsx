import React from 'react'

const Footer = () => {
    return (
        <div className='bg-cover p-4 text-white text-center mt-6 mb-10'>
            &copy; {new Date().getFullYear()}. All Right Reserved. Created by HF
        </div>
    )
}

export default Footer