import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";
import Header from './Header'

function NotFound() {

const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
        }

    return (
        <div className='NotFound'>
            <div className='Container'>
                <Header />

                <div className='NotFound-content'>
                    <h1>Error 404.</h1>
                    <h2>Page Not Found</h2>
                    <img src={require('../imgs/forest.png')} alt="forest" />
                    <h3>Woops, looks like you got lost in the woods...</h3>
                    <h3>Don't worry! We will help you get back!</h3>
                    <button className="Dashboard-new-btn" onClick={goBack}><AiOutlineArrowLeft /> Back</button>
                </div>

            </div>
        </div>
    )
}

export default NotFound