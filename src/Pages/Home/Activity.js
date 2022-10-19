import React from 'react';
import './Home.css';




const Activity = ({ activity }) => {
    return (
        <div class=''>


            <div class="card-side  shadow-xl d-flex box  align-items-center rounded-lg my-5">

                <div class='stories-img color ml-5'>
                    <img src={activity.img} alt="" srcset="" />

                </div>


                <div class="card-body mt-5 g-5">
                    <h2 class="card-title">{activity.name}</h2>
                    <p>{activity.descriptions}</p>
                    <br />
                    <br />
                    <br />
                    <button class="btn justify-end">{activity.button}</button>
                </div>

            </div>
        </div>
    );
};

export default Activity;