import React, { useState } from 'react';


function Nav() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);

    return (
        <>
        <style>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
 body {
                    background-color: black !important;
                    color: white !important;
                    font-family:'Poppins',sans;
            }

nav, nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    margin-top: 2vh;
    margin-right: 2vw;
    margin-left:4vw;
}

nav ul {
    gap: 2vw;
    margin-right: 2vw;
    margin-top: 0;
}

nav h2 {
    padding: 1vw;
    font-weight: bolder;
}

nav a {
    color: black;
    text-decoration: none;
}

nav li {
    list-style-type: none;
    background-color: white;
    color: black;
    padding: 0.5vw 1vw;
    border-radius: 2vw;
}

nav button {
    display: none !important;
}








@media (max-width: 450px) {
   

    nav button {
        display: block!important;
    }
}



nav button {
    display: block;
    margin-right: 2vw;
    height: 6vh;
    width: 8vh;
    font-size: 4vh;
    background: white;
    border-radius: 2vw;
    border: 1px solid #292929;
    color: #292929 !important;
}
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');






@media (max-width: 600px) {
    nav ul {
        display: none;
    }

   
}
    #myDialog{
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(10px);
        border:none;
        position:fixed;
        top:0;
        width: 100%;
        height: 100%;
      }

      #myDialog h1{
            font-size:3vh !important;
      }
    #myDialog a{
        color:black;
        text-decoration:none;
    }
    #myDialog button{
        height:7vh;
        width:14vw;
        font-size:3vh;
        border:none;
        background-color:linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1)) !important;

    }

    .nav-d{
    display:flex;
    align-items:right;
    justify-content:right;
    }
.gradient {
                    background: linear-gradient(90deg, lightpink, lightblue, lightgreen, yellow); 
                    font-weight:normal;
                    -webkit-background-clip: text; /* Clip the background to the text */
                    -webkit-text-fill-color: transparent; /* Make the text color transparent to show the gradient */
                    background-clip: text; /* Standard property for background clipping */
                    color: transparent; /* Fallback for browsers that do not support the text fill color property */
                }





@media (max-width: 450px) {
    

    nav button {
        display: block;
    }
}



nav button {
    display: block;
    margin-right: 2vw;
    height: 6vh;
    width: 8vh;
    font-size: 4vh;
    background: white;
    border-radius: 2vw;
    border: 1px solid #292929;
    color: #292929 !important;
}

            `}
        </style>
            <nav>
                <h2><a href="./" className="nav-link">TrackAtt</a></h2>
                <ul>
                    <li><a href="./few">Try Now</a></li>
                   
                </ul>
                
            </nav>
           
        </>
    );
}

export default Nav;
