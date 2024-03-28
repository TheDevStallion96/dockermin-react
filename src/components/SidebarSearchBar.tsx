import React from 'react'

function SidebarSearchBar() {
  return (
    <>
        <div className="block px-6 py-3">
            <input type="search" id="search" name="search" className="block px-4 py-2 border border-blue-600 placeholder:text-blue-600 rounded-md bg-inherit" placeholder="Search"></input>
        </div>
    </>
  )
}

export default SidebarSearchBar
