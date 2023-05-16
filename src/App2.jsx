import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App2.css'

function App() {
  

  return (
  
<div className='container'>
     <div className='main'>
         <div className='branch'>dfdfdxfx</div>
        <h1>My Blogs</h1>
       

        <Blog blogname='my first blog' content=' React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It was developed by Facebook and has gained widespread adoption in the web development community. React follows a component-based architecture, where the UI is broken down into reusable and self-contained components.'/> 



        <Blog blogname='second blog' content='
JavaScript is a versatile and powerful programming language that is primarily used for web development. It was created by Brendan Eich in 1995 and has since become one of the most widely adopted languages for both front-end and back-end development.'/> 


        <Blog blogname='third blog' content='
Software engineering is a discipline that involves the application of engineering principles and practices to the development, maintenance, and evolution of software systems. It encompasses a wide range of activities, including requirements analysis, design, coding, testing, deployment, and maintenance of software.'/> 



        <h3>@Kibet</h3>
        <p>coded on {new Date().toLocaleDateString()}</p>
     </div>
     </div>

 
  )
}


function Blog({blogname, content}) {

    return (
        <div>
            <h1>{blogname}</h1>
            <p>{content}</p>
          
        </div>
        
    )
}

export default App

