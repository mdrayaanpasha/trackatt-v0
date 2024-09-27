import Nav from "./nav";
import HowImg from "./assets/home-card-1.jpeg";

function How() {
    return (
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
                `}
            </style>
            <Nav />
            <div className="hero">
                <div className="hero-des">
                    <h1 className="gradient">Know How TrackAtt Works!</h1>
                    <h1>Understand How the Math & Code Behind TrackAtt Works to Trust <br /> the Algorithm and Get 75%.</h1>
                </div>
                <div className="hero-img">
                    <img src={HowImg} alt="TrackAtt Overview" />
                </div>
            </div>
            <div className="how">
                <h1 class="gradient">How it Works?</h1>
                <p>Hey there, fellow students! Let's face it, attending classes can be a real drag sometimes. But, we all know that attendance is key to not failing (and also not disappointing our parents)!</p>
                <p>So, here's a super cool tool to help you stay on top of your attendance game!</p>
                <ul>
                    <li>
                        <h3 style={{color:"white"}}>Step 1: Confess Your Sins (Enter Current Attendance)</h3>

                        <p>Be honest, how many classes have you actually attended? Don't worry, we won't judge you (much)!</p>
                    </li>

                    <li>
                        <h3 style={{color:"white"}}>Step 2: The Ultimate Goal (75% Attendance)</h3>
                        <p>Aim high, folks! We're going for a solid 75% attendance. It's like getting a C+ in adulting – not bad, not bad at all!</p>
                    </li>
                    <li>
                        <h3 style={{color:"white"}}>Step 3: The Math Magic</h3>
                        <ol>
                            <li>Total Classes: The Never-Ending Story - Count all those scheduled classes (Mondays, Tuesdays, Fridays... ugh, so many!)</li>
                            <li>Attendance Needed: The Reality Check - Calculate how many classes you need to attend to reach 75% (e.g., 15 out of 20 – yikes, better get going!)</li>
                            <li>Classes Attended: The Pat-on-the-Back - See how many classes you've already attended.</li>
                            <li>Classes Left: The Wake-Up Call - Find out how many more classes you need to attend to reach your goal (oh no, better get moving!)</li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div className="algorithm">
                <h1 class="gradient">Algorithm!</h1>
                
                <div className="code">
                    <pre>
{`function printRemainingClasses(schedule, currentAttendance) {
    const today = new Date();
    let totalDays = 0;
    Object.keys(schedule).forEach(day => {
        totalDays += schedule[day].length;
    });

    const daystogo = totalDays * 0.75; // Total classes needed
    let numDays = 0;

    Object.keys(schedule).forEach(day => {
        schedule[day].forEach(dataStr => {
            const classDate = new Date(dataStr);
            if (classDate <= today) {
                numDays++;
            }
        });
    });

    const tilltodayAttended = numDays * (currentAttendance / 100);
    const lefttogo = Math.ceil(daystogo - tilltodayAttended);
    return lefttogo;
}`}
                    </pre>
                    
                </div>

                
            </div>
            <style>
                {`
                .sourceCode{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    flex-direction:column;
                    margin-top:5vh;
                    height:30vh;
                    width:90vw;
                    gap:3vh;
                   box-shadow: 0 0 10px rgba(255, 255,255 , 0.3), 
            0 0 20px rgba(255, 255, 255, 0.1), 
            0 0 30px rgba(255, 255, 255, 0.2);
            margin-left:5vw;
            margin-bottom:5vh;
            border-radius:1vw;
                }
            .btn,.btn:hover{
                background-color:white;
            }
                .btn:hover{
                color:black;
                }
                
                `}
            </style>
            <div className="sourceCode">
                <h1 class="gradient">PLay With Code By Yourself:</h1>
                <a href="" className="btn">Source code <svg viewBox="0 0 24 24" fill="currentColor" width="1.5em" height="1.5em" class="xfungia xxk0z11 xvy4d1p x1yfc4yt"><g clip-path="url(#a)"><path d="m15.95 9.465-8.193 8.192a1 1 0 1 1-1.414-1.414l8.192-8.193H9.878a1 1 0 1 1 0-2h7.072a1 1 0 0 1 1 1v7.071a1 1 0 1 1-2 0V9.465z"></path></g><defs><clipPath><path d="M0 0H24V24H0z"></path></clipPath></defs></svg></a>
            </div>
        </>
    );
}

export default How;
