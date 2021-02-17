import React from 'react'
import Project from './project'
import About from './about'
import Contact from './contact'

function pagecontent(){
    return(
        <div className="w3-content w3-padding" style={{maxWidth: '1564px'}}>
            <Project></Project>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default pagecontent