import React, { useState } from 'react'

const MenuContent = ({open, setOpen,children}) =>  {

const dropDowm = (e) =>{
        setOpen((open)=> !open)
   }
    return(
        <div onClick={dropDowm}>{children}</div>
    )
  
}

export default MenuContent