import React from 'react';
import './Home.css';

import logo from '../../images/logo.png'
import Posts from './Posts';
import Services from './Services';

const Home = () => {
    return (
        <div className='g-2'>
            <div className='d-flex gap-2'>
                <div class="mt-14">
                    <img src={logo} class="h-8 w-13" alt="name" />
                </div>
                <button type="button" class=" mt-5 text-ellipsis  text-4xl text-purple-800 text-uppercase">Slang</button>



                <div className=''>
                    <div className='text-center mt-5  text-3xl '>
                        <input type="text" name="box"
                            placeholder="Search" />




                    </div>

                </div>


            </div>

            <div className="main-container mt-3">
                <div className="row">
                    <div className="navbar col-md-2 rounded mt-2">


                        <div class="wrapper ">
                            <div className="sidebar mt-5">
                                <h2 className='font-bold text-3xl'>Account</h2>
                                <br /><br />
                                <div className="menu">
                                    <a href="#" className="active">

                                        <span class="i">
                                            <i class="fa fa-home"></i>

                                        </span>

                                    </a>

                                    <br />
                                    <br />
                                    <a href="#" >

                                        <span class="i">
                                            <i class="fa fa-user"></i>

                                        </span>
                                        Home
                                    </a>
                                    <br />
                                    <a href="#" >

                                        <span class="i">
                                            <i class="fa fa-user"></i>

                                        </span>
                                        Listing

                                    </a>
                                    <br />
                                    <a href="#" >

                                        <span class="i">
                                            <i class="fa fa-user"></i>

                                        </span>
                                        Advertisement
                                    </a>
                                    <br />
                                    <a href="#" >

                                        <span class="i">
                                            <i class="fa fa-user"></i>

                                        </span>
                                        Chat
                                    </a>











                                </div>
                            </div>
                            <div class="main_content">
                                <div className="header">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" post col-md-8 rounded mb-5">
                        <div className='d-flex gap-5'>


                        </div>
                        <br />
                        <br />





                        <br /><br />
                        <Posts></Posts>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;