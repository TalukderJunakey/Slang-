import React from 'react';
import img1 from '../../images/four.jpg'
import img2 from '../../images/picone.jpg'
import './Home.css'
const Profiles = () => {
    return (
        <div class='stories'>
            <div class='stories-img color'>
                <img src={img1} alt="" srcset="" />
                <div class='add'>+</div>
            </div>

            <div class='stories-img color'>
                <img src={img2} alt="" srcset="" />
                <div class='add'>+</div>
            </div>

            <div class='stories-img color'>
                <img src={img1} alt="" srcset="" />
                <div class='add'>+</div>
            </div>

            <div class='stories-img color'>
                <img src={img2} alt="" srcset="" />
                <div class='add'>+</div>
            </div>

            <div class='stories-img color'>
                <img src={img1} alt="" srcset="" />
                <div class='add'>+</div>
            </div>

            <div class='stories-img color'>
                <img src={img2} alt="" srcset="" />
                <div class='add'>+</div>
            </div> <div class='stories-img color'>
                <img src={img1} alt="" srcset="" />
                <div class='add'>+</div>
            </div>




        </div>
    );
};

export default Profiles;