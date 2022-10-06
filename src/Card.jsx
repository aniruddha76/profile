import React from 'react';
import './card.css'

const card = () => {
    return (
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div class="card p-4"> <div class=" image d-flex flex-column justify-content-center align-items-center">
                <button class="btn btn-secondary">
                    <img src="https://i.imgur.com/PeNwvVO.png" height="200" width="130" />
                </button>
                <span class="name mt-3">Aniruddha Thakur</span>
                <span class="idd">@its_me_ani</span>
                <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span class="idd1">Oxc4c16a645_b21a</span> <span><i class="fa fa-copy"></i></span>
                </div>
                <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                    <span class="number">53 <span class="follow">Notes Upload</span></span>
                </div> <div class=" d-flex mt-2">
                    <button class="btn1 btn-dark">Edit Profile</button> </div>
                <div class="text mt-3" align="center"> <span>Aniruddha Thakur is a creator of Team Leader x bold graphics and digital artwork.<br /><br /> Artist/ Creative digital artist / Work On Adobe Illustrator and Ibis Paint. </span> </div>
                <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span>

                    <span><i class="fa fa-facebook-f"></i></span>
                    <span><i class="fa fa-instagram"></i></span>
                    <span><i class="fa fa-linkedin"></i></span>
                </div>

                <div class=" px-2 rounded mt-4 date ">
                    <span class="join">Joined October,2022</span>

                </div>
            </div>
            </div>
        </div>
    );
}

export default card;
