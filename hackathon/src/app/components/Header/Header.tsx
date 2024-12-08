'use client'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { IoCartOutline } from "react-icons/io5"
import { HiOutlineMenu } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div>
      <div className='border-b border-gray-200 py-6 p-4'>
        <div className='container flex justify-between items-center'>
          {/* Logo Section */}
          <div className='font-bold text-4xl text-center sm:text-left text-blackish'>
            Exclusive
          </div>

          {/* Menu Items - Desktop View */}
          <div className='hidden sm:flex justify-center items-center gap-8'>
            <ul className='flex gap-8'>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className='hidden sm:flex gap-4 text-gray-500 text-[30px] items-center'>
            {/* Search Icon */}
            <BsSearch />

            {/* Heart Icon with Text "1" */}
            <div className='relative text-[#23A6F0]'>
              <FiHeart />
              <div className='absolute top-0 right-0 text-[12px] text-[#23A6F0]'>
                1
              </div>
            </div>

            {/* Cart Icon with Text "1" */}
            <div className='relative text-[#23A6F0]'>
              <IoCartOutline />
              <div className='absolute top-0 right-0 text-[12px] text-[#23A6F0]'>
                1
              </div>
            </div>
          </div>

          {/* Hamburger Menu - Mobile View */}
          <div className='sm:hidden text-[30px]' onClick={toggleMenu}>
            <HiOutlineMenu />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='sm:hidden flex flex-col items-center gap-4 mt-4'>
            <ul>
              <li className='text-center'>Home</li>
              <li className='text-center'>Product</li>
              <li className='text-center'>Pricing</li>
              <li className='text-center'>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
