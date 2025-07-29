import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container_fluid bg-[#f1f5f9]">
                <div className="py-[15px] px-8 flex justify-between items-center">
                    <div className="text-3xl font-[200]">
                        <Link to='/'>
                            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                                <span className="relative text-white">KnovatorJob</span>
                            </span>
                        </Link>
                    </div>
                    <div className="gap-6 flex font-[200] text-[#f8fafc]">
                        <div className="bg-[#0284c7] hover:bg-[#0ea5e9] p-3">
                            <Link to='/add-job'>Job Post</Link>
                        </div>
                    </div>
                </div>
        </div>
      )
}

export default Navbar