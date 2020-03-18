import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Info = () => {
    return (
        <div>
            <Navbar />
            <h1>Women right in Germany</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nisi doloribus, inventore ducimus molestias incidunt maiores
                obcaecati repellendus iste. Ratione soluta sint maiores
                explicabo tempore sunt delectus rem, iusto facere vel.
                </p>
            <button>
                <Link to='/Info'>Get more Issues</Link>
            </button>
            <button>
                <Link to='/register'>Get Help</Link>
            </button>
            <Footer />
        </div>
    )
}

export default Info
