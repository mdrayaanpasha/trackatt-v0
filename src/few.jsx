import { useState } from "react";
import Nav from "./nav";
import fewImg from "./assets/few.jpeg"
function Few() {
    const [courses, setCourses] = useState(['BCA','BCOMC','BCOMA']);
    const [myCourse, setMyCourse] = useState('');
    const [myClass, setMyClass] = useState('');
    const [year,setYear] = useState(1)
    const [Per,setPer] = useState(1)

    const handleChange = (event) => {
        setMyCourse(event.target.value);
    };

    const handleClassChange = (event) => {
        setMyClass(event.target.value);
    };

    const BCA = ['C', 'MATH', 'UNIX', 'GE', '2LANG', 'FC'];
    const BCOMC = ['IFS', 'BE', 'GE', 'Lang', 'FA'];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data here
 
        window.location.href=`./result?Course=${myCourse}&Class=${myClass}&Year=${year}&Per=${Per}`
        // You can also handle form submission here or make an API call
    };

    return (
        <>
        <style>
        {`
        
        .flex-it{
        display:flex;
        align-items:center;
        margin-left:5vw;
        background:#1A1C1F;
        width:93vw;
        margin-bottom:5vh;

        padding:1vw;
        border-radius:1vw;

        }
        .flex-it img{
        width:38vw;
        border-radius:1vw;
        
        }
      input , select{
        background: #1A1C1F !important;
        color:white !important;
        border: 2px solid; 
        border-image: linear-gradient(90deg, lightpink, lightblue, lightgreen, yellow) 1 !important;
        
      }
    


        .container{
        width:50vw !important;
        }

         .btn, .btn:hover{
                    background-color:black;
                    color:white;
                    width:8vw;
                    height:6vh;
                    border:none;
                    border-radius:1vw;
                    font-weight:bolder;
        }
        
        @media(max-width:1100px){
            .flex-it{
            height:85vh;
            }
            .flex-it img{
                height:90%;
                object-fit:cover !important;
            }
            .btn{
                width:15vw !important;

            }
        }

        @media(max-width:1000px){
            .flex-it img{
                display:hidden;
                height:0;
                width:0;
                
            }
            .flex-it{
                flex-direction:column;
            }
            input, select{
                width:78vw !important;
            }
            .container {
                margin:0;
                width:99vw !important;
            }

        }

        @media(max-width:500px){
            input, select, .flex-it{
                width:95vw !important;
                margin:0;
            }
            input, select{
                width:90vw !important;
            }
            .flex-it{
                margin-left:2vw;
                padding:4vw;
                margin-top:3vh;
            }
                .btn{
                width:35vw !important;
                
            }
        }
        `}
        </style>
        <Nav></Nav>
        <div className="flex-it">
            <img src={fewImg} alt="" />
        <div className="container ">
            <h1 className="gradient">Quick Details!</h1>

            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="form-group">
                    <label htmlFor="course-select">Course</label>
                    <select
                        name="Course"
                        id="course-select"
                        className="form-control"
                        value={myCourse}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-SELECT-</option>
                        {courses.map((ele, index) => (
                            <option key={index} value={ele}>
                                {ele}
                            </option>
                        ))}
                    </select>
                </div>

                {myCourse === 'BCA' && (
                    <div className="form-group mt-3">
                        <label htmlFor="class-select">Class</label>
                        <select
                            name="Class"
                            id="class-select"
                            className="form-control"
                            value={myClass}
                            onChange={handleClassChange}
                        >
                            <option value="">-SELECT-</option>
                            {BCA.map((ele, index) => (
                                <option key={index} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                )}


                {myCourse === 'BCOMC' && (
                    <div className="form-group mt-3">
                        <label htmlFor="class-select">Class</label>
                        <select
                            name="Class"
                            id="class-select"
                            className="form-control"
                            value={myClass}
                            onChange={handleClassChange}
                        >
                            <option value="">-SELECT-</option>
                            {BCOMC.map((ele, index) => (
                                <option key={index} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

            {myCourse === 'BCOMA' && (
                    <div className="form-group mt-3">
                        <label htmlFor="class-select">Class</label>
                        <select
                            name="Class"
                            id="class-select"
                            className="form-control"
                            value={myClass}
                            onChange={handleClassChange}
                        >
                            <option value="">-SELECT-</option>
                            {BCOMC.map((ele, index) => (
                                <option key={index} value={ele}>
                                    {ele}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="form-group mt-3">
                    <label htmlFor="year-input">Year</label>
                    <input
                        type="number"
                        name="Year"
                        id="year-input"
                        className="form-control"
                        value={year}
                        onChange={e=>setYear(e.target.value)}
                        max={3}
                        min={1}
                        required
                    />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="year-input">What's Your Current Percentage?</label>
                    <input
                        type="number"
                        name="per"
                       
                        className="form-control"
                        value={Per}
                        onChange={e=>setPer(e.target.value)}
                        max={100}
                        min={0}
                        required
                    />
                </div>

                
                

                <button type="submit" className="btn mt-3">
                    Checkout!
                </button>
            </form>
        </div>
        </div>
        </>
    );
}

export default Few;
