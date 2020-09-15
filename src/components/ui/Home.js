import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
    <div style={{height: "150px"}}>
        <h1><Link to={'/home'} replace>Home</Link></h1>
    </div>
)


export default Home