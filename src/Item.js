import React from 'react'

export const Item = ({bills, handleonDelete, id}) => {
    const handleDel = () => {
        handleonDelete(id)
    }
    return (
        <div>
            {bills} 
            
            <button onClick={handleDel}>Delete</button>
        </div>
    )
}
