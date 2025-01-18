import TypewriterComponent from "./TypewriterComponent";

function Nametext() {
    return (
        <div style={{ backgroundColor: "#FFEAC1" }}>

            <p style={{ fontSize: "30px" }}>Hi, I am </p>
            <p style={{ fontSize: "55px",color:"brown"}} id="font">Vamshi Krishna</p>
            <p style={{ fontSize: "40px" }}> I am a  <TypewriterComponent /> </p>
        </div>
    )
}
export default Nametext;