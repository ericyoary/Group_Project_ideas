import React from 'react'
import ToolItem from './ToolItem.jsx'
const Tools = ({ tools }) => {
    return (
        <div className='row justify-content-center m-auto'>
            { tools.map(tool => (
                <ToolItem key={tool.id} tool={ tool}/>
            ))}
        </div>
    )
}

export default Tools