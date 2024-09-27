import car2 from "./assets/car2.jpeg"
import Nav from "./nav"
import r from "./assets/r-img.jpg"
import z from "./assets/z-img.jpg"
import s from "./assets/s-img.jpg"
import si from "./assets/si-img.jpg"
import m from "./assets/m-img.jpg"
import a from "./assets/a-img.jpg"

function About(){
  return(
    <>
      <style>
        {`
          .hero-img {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-img img {
            width: 90vw;
            border-radius: 1vw;
            height: 100vh;
            object-fit: cover;
          }
          .hero-des {
            margin: 4vh;
            margin-left: 5vw;
          }
          .gradient {
            font-size: 4vh;
          }
          .hero-des h1 {
            font-size: 5vh;
          }
          .how, .code,.algorithm h1{
            margin-left:5vw;
            margin-top:5vh;
          }

          .how ul {
            padding-left: 20px;
          }
          .algorithm pre {
            background-color: #1A1C1F;;
            padding: 2vw;
            border-radius: 1vw;
            width:90vw;
            border-left: 4px solid #34c9c3;
            overflow-x: auto;
            font-size: 14px;

          }
          p, li{
            color:grey;
          }

          .gradient{
            font-size:5vh;
          }
          .team-container{
            margin-left:2vw;
            display:flex;
            align-items:center;
            justify-content:space-evenly;
          }
          .card-ind img{
            height:20vh;
            width:10vw;
            border-radius:1vw
            
          }
        .card-ind strong, .card-ind small{
        padding-top:0.2vh;
        }
        .card-ind{
  padding: 0.5vw;
  border-radius: 1vw;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-ind:hover{
  transform: translateY(-0.5vw);
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.2);
}




        .card-ind:hover{
        cursor:pointer;
        }
            .project-description {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;

  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project-description h4{
  color: #333;
  font-weight: bold;
  margin-top: 0;
}

.project-description p {
  color: #666;
}
  #ra:hover {
  box-shadow: 0 0 10px #6495ED;
}

#john:hover {
  box-shadow: 0 0 10px #FFC5C5;
}

#zoya:hover {
  box-shadow: 0 0 10px #F7D2C4;
}

#sujan:hover {
  box-shadow: 0 0 10px #776969;
}

#simra:hover {
  box-shadow: 0 0 10px #B3B3B3;
}

#anu:hover {
  box-shadow: 0 0 10px #B98493;
}
  
        `}
      </style>
      <Nav></Nav>
      <div className="hero">
        <div className="hero-des">
          <h1 className="gradient">Know How TrackAtt Was Made!</h1>
          <h1>TrackAtt was made by group of<br /> 1st year BCA Students @ SJU.</h1>
        </div>
        <div className="hero-img">
          <img src={car2} alt="TrackAtt Overview" />
        </div>
      </div>

      <h2 className="gradient" style={{padding:"2vw",marginLeft:"3vw"}}>Meet Our Team</h2>
      <div className="team-container">
        <div className="card-ind" id="ra" style={{background:"#84A0FB"}}>
          <img src={r} alt="" />
          <center><small><strong>Rayaan :)</strong></small></center>
          
        </div>
        <div className="card-ind" id="john" style={{background:"#FFF8FE",color:"black"}}>
          <img src={m} alt="" />
          <center><small><strong>Johnnatan Marcus</strong></small></center>
       
        </div>
        <div className="card-ind" id="zoya" style={{background:"#E2C794",color:"black"}}>
          <img src={z} alt="" />
          <center><small><strong>Zoya Hafsa</strong></small></center>
        </div>
        <div className="card-ind" id="sujan" style={{background:"#49342D"}}>
          <img src={s} alt="" />
          <center><small><strong>Sujan Edwin Penubala</strong></small></center>
       
        </div>
        <div className="card-ind" id="simra" style={{background:"#CDCDC1",color:"black"}}>
          <img src={si} alt="" />
          <center><small><strong>Simra Fathima</strong></small></center>
        
        </div>
        <div className="card-ind" id="anu" style={{background:"#9B7978"}}>
          <img src={a} alt="" />
          <center><small><strong>Anu Rakshitha</strong></small></center>
        </div>
      </div>

      <style>
                {`
                .sourceCode{
                    display:flex;
                    padding:2vw;
                   
                    flex-direction:column;
                    margin-top:5vh;
                    height:35vh;
                    width:90vw;
                    gap:3vh;
                   box-shadow: 0 0 10px rgba(255, 255,255 , 0.3), 
            0 0 20px rgba(255, 255, 255, 0.1), 
            0 0 30px rgba(255, 255, 255, 0.2);
            margin-left:5vw;
            margin-bottom:5vh;
            border-radius:1vw;
            margin-top:10vh;
                }
            .btn,.btn:hover{
                background-color:white;
                width:10vw;
            }
                .btn:hover{
                color:black;
                }
                .sourceCode small{
                 max-width:90%;
                }
                
                `}
            </style>

      <div className="sourceCode">
                <h1 class="gradient">What is TrackAtt ?</h1>
                <small>We, a group of 1st year BCA students at St. Joseph's University, felt your pain - literally. Who needs social lives, right? So, we created TrackAtt for the Elixir Event 2024, an innovative solution to make attendance tracking less of a headache. With TrackAtt, you can finally say goodbye to manual tracking and hello to more free time (or let's be real, more time to catch up on lectures you slept through).</small>
                <a href="./few" className="btn">Try Now <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></a>
            </div>
      
    </>
  )
}


export default About