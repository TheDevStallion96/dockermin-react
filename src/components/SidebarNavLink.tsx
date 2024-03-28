import React from 'react'

interface SidebarNavLinkProps {
  text: string
  children?: React.ReactNode
}

function SidebarNavLink({ text, children }: SidebarNavLinkProps) {
  return (
    <>
        <li className="bg-inherit hover:bg-blue-600/10">
            <a href="#" className="flex items-center px-6 py-2 text-gray-100 hover:text-blue-600 transition-all duration-100 ease-in-out">
                <span className="block pr-3">
                    {children}
                </span>
                <span>{text}</span>
            </a>
        </li>
    </>
  )
}

export default SidebarNavLink
