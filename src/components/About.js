import React from "react";

function About({image, about}) {
    const blogLogo = "https://via.placeholder.com/215"
    return(
        <aside>
            <img src= {image || blogLogo} alt="blog logo"/>
                <p>{about}</p>
        </aside>
    );
}

export default About;