import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTPsQi1eMR_NYOPIVWhBhUh5P7ewLTSkZMQ&usqp=CAU" 
                profileSrc="https://static.vecteezy.com/system/resources/thumbnails/001/234/725/small/side-portrait-of-a-black-man.jpg" 
                title="Gary Buster Holmes"
            />

            <Story
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://c8.alamy.com/comp/T5E0AD/retro-gentleman-avatar-portrait-profile-picture-icon-vector-T5E0AD.jpg"
                title="Steve Johns"
            />

            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000*q=80"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjiblcyaqkGExJo73a2_tpz_VPKjk8FshqJpZ9hwxgpSOpVAOUmqmC_-MjMJ9toZm7ps&usqp=CAU"
                title="Antonio Zepelli"
            />

            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbj_G3TmZfIf5iUPFO6UcHQ3C4F0hki4ocbg&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmCqwoJYFUX3gUdZ3rDaTfIRIkY-E29vlrg&usqp=CAU"
                title="Veronica Jones"
            />

            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIE1gp7n_GANZCLzF2sTfbMQXl-yfe8zdnQ&usqp=CAU"
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYz-rdUQsTktcdyHdxNjadEmTm-1qYZY56g&usqp=CAU"
                title="Jairzeno Sangha"
            />

        </div>
    );
}

export default StoryReel;