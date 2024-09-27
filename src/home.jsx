import flexCover from "./assets/cover-home.jpeg";
import Card1 from "./assets/home-card-1.jpeg";
import Card2 from "./assets/car2.jpeg";
import Card3 from "./assets/home-card-3.jpeg";
import Nav from "./nav";
function Home() {
    return (
        <>
            <style>
                {`
               
                .gradient {
                    background: linear-gradient(90deg, lightpink, lightblue, lightgreen, yellow); 
                    font-weight:normal;
                    -webkit-background-clip: text; /* Clip the background to the text */
                    -webkit-text-fill-color: transparent; /* Make the text color transparent to show the gradient */
                    background-clip: text; /* Standard property for background clipping */
                    color: transparent; /* Fallback for browsers that do not support the text fill color property */
                }
                .hero{
                height:auto;
                padding:0.1vw;
                }
                
                .flex-hero{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    background-color:#1A1C1F;
                    width:90vw;
                    padding:1vw;
                      
                }
                
                .flex-hero div{
                    padding:5vw;
                    justify-content:left;
                    margin-right:15vw;
                }
                .flex-hero img{
                    height:25vw;
                    width:60vw;
                    background-size:cover;
                    object-fit:cover;
                    border-radius:1vw;
                    
                }
                .flex-hero p{
                    color:grey;
                }
                .hero-a{
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                margin-top:5vh;
                }

            button{
                    background-color:black;
                    color:white;
                    width:7vw;
                    height:6vh;
                    border:none;
                    border-radius:2vw;
                    font-weight:bolder;
                }
                .other{
                margin-top:2.5vw;
                margin-left:5vw;
                }
                .other h1{
                font-size:5vh ;
                font-weight:normal;
                }
                .container-card img{
                height:30vh;
                width:25vw;
                border-radius:1vw;
                object-fit:cover;
                }
                .container-card{
                background-color:#1A1C1F;
                width:35vw;
             
                flex-direction:column;
                padding:1vw;
                border-radius:1vw;
                }
                .container{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    gap:2vw;
                    margin-bottom:5vh;
                }
             
              .container-card p, .container-card h2, .container-card button, .container-card h5{
                    margin:2.3vh;
              }
                .container-card p{
                   color:#8A9094;
                  
                }
                
                .container-card button{
                    width:14vw;
                    border-radius:1.5vw;
                }
                

.container-card {
  position: relative;

  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for zoom and shadow effect */
}

.container-card:hover {
  transform: scale(1.05); /* Zoom in effect */
  box-shadow: 0 0 10px 5px rgba(255, 105, 180, 0.2), /* Light pink shadow */
              0 0 10px 5px rgba(173, 216, 230, 0.2), /* Light blue shadow */
              0 0 10px 5px rgba(144, 238, 144, 0.2), /* Light green shadow */
              0 0 10px 5px rgba(255, 255, 0, 0.2); /* Yellow shadow */
}


                .nav-e {
                
                display:flex;
                align-items:center;
                width:30vw;
                justify-content:center;
                margin-bottom:5vh;
                gap:5vw !important;
                font-size:1.8vh;
                color:white;
                }

                .nav-e a{
                color:white;
                text-decoration:none;
                }
                html {
  scroll-behavior: smooth;
}

             @keyframes slideInLeft {
  from {
    transform: translateX(-60%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.typewriter {
  animation: slideInLeft 2s ease-out;
}



                @media(max-width:1100px){
                    button{
                    width:10vw;
                    }

                   .other h1{
                        font-size:4vh;
                   }
                    .other{
                        margin-top:10vh;
                    }
                    .flex-hero{
                        width:99vw;
                        gap:5vw;
                    }
                    .flex-hero img{
                        height:55vh;
                    }
                    .flex-hero div{
                      
                        padding:0;
                        margin:0;
                    }
                }

                @media(max-width:800px){
                    button{
                        width:35vw;
                    }

                    .other{
                    margin-top:5vh;
                    margin-left:0;
                        width:100%;
                        padding:2vw
                    }
                    .other h1{
                        font-size:4.5vh;
                        margin:0;
                    }

                    .hero{
                    gap:0;
                    }
                    .flex-hero, .container-card{
                    height:auto !important;
                    flex-direction:column;
                    width:97vw;
                    margin-bottom:2vh;
                    }

                    .flex-hero h1{
                        font-size:3vh;
                    }
                    .flex-hero img, .container-card img{
                        height:34vh;
                        width:98%;
                    }
                    .container{
                    flex-direction:column;
                    }
                    .container-card button{
                        width:35vw;
                    }
                }

                @media(max-width:650px){
                    .other h1{
                        font-size:4vh;
                    }
                }
                

                @media(max-width:450px){
                    .other h1{
                        font-size:3.4vh;
                    }
                }
                `}
            </style>
            <main>
                <Nav></Nav>
                <section className="hero" >
                    <div className="other">
                    <h1 className="gradient typewriter">Get 75% Attendance With Math.</h1>
                    <h1>Unlock The 75% Achievement Now!</h1>

                    
                    </div>
                    <div className="hero-a">
                    <div className="flex-hero">
                        <img src={flexCover} alt="Cover for home section" />
                        <div className="div">
                            <h1>Course Demos</h1>
                            <p>Try experimental demos featuring 5+ courses from SJU, including BCA, BCOM, BBA, and BSC.</p>
                            <button onClick={e=>window.location.href="./few"}>Try it <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
                        </div>
                    </div>
                    </div>
                </section>
                <section className="container" style={{marginTop:"5vh"}}>
                <div className="container-card">
                    <img src={Card1} alt="" />
                    <h2>How This Works?</h2>
                    <p>Understand how the math & code works, to trust the product.</p>
                    <h5 className="gradient">Unlock Potential</h5>
                    <button onClick={e=>window.location.href="./how"}>Check Out! <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
                </div>

            <div className="container-card">
                <img src={Card3} alt="" />
                <h2>Register your class!</h2>
                <p>Email Your TimeTable To Us Today on mdrayaanpasha@gmail.com</p>
                <h5 className="gradient">Join Community</h5>
                <button onClick={e=>window.location.href="https://forms.gle/uGspZKcNGpEbj48p6"}>Add Your Class! <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
            </div>

           
            <div className="container-card">
                <img src={Card2} alt="" />
                <h2>Meet Our Team</h2>
                <p>We're a dedicated team solving Attendence Problem.</p>
                <h5 className="gradient">Get to Know Us</h5>
                <button onClick={e=>window.location.href="./about"}>Learn More! <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></button>
            </div>

            



                </section>
              
            </main>
            
        </>
    );
}

export default Home;
