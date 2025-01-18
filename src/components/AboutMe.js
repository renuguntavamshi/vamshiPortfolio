


function AboutMe({ image }) {
    return (
        <div >
            <div>
                <img src={image} alt="Vamshi" />
            </div>
            <div id="aboutdiv"  >
                <h1>About Me</h1>
                <p style={{fontSize:"22px"}}>
                    Hi, I am Vamshi Krishna, a 25 year old
                    web developer, & a Figma  designer
                    living in Hyderabad, India. I am a 
                     computer science graudate, having 6 months
                      of experience at Metricvisio.
                   <br/>
                    I have been working for the past 8 months with Javascript. I have been writing/refactoring  & connecting restful.apis using React JS. I also have hands-on experience on Figma Designing, using Bootstrap, Material UI.It gives me great pleasure and satisfaction  working  on projects and creating impactful solutions.

                </p>
            </div>
        </div>
    )
}
export default AboutMe;