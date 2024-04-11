import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Loading = () => {
  return (
    
     <div>{toast.loading("wait")}
     <Toaster />
     </div>
    
  )
}

export default Loading
