import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 items-center bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">Hi, Indra Adha</div>
      <div className="flex items-center space-x-4">
      <img
    alt="user 4"
    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80"
    class="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
  />
      </div>
    </nav>
  )
}

export default Navbar