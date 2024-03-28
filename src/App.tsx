import { useState } from 'react'
import Sidebar from './components/Sidebar';
// import './App.css'

function App() {
  return (
    <>
      <div className="flex h-screen">
      <Sidebar />
  <main className="flex-1">
    <div className="block px-6 py-6">
      <span className="block text-gray-600 font-normal text-xs tracking-wider">Settings</span>
      <h1 className="block text-2xl font-medium text-gray-800">Enviroments</h1>
    </div>
    <div className="mx-6">
      <div className="block p-6 bg-gray-200">Welcome</div>
    </div>
  </main>
</div>
    </>
  )
}

export default App
