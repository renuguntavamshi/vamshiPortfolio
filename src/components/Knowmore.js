import linkedin from '../assets/linkedin-removebg-preview 1 (1).png';
import vklogo from '../assets/Vector (1).png'
import love from '../assets/love-logo-and-symbols-vector-template-removebg-preview 1 (1).png'
import copyrights from '../assets/Copyright-Symbol-Free-PNG-Image 1 (1).png'
function Knowmore(){
    return  (
        <div>
<h1> You can Find me on </h1>
<img src={linkedin} />
<br /><br />
<img src={vklogo} /><br /><br />
<h1>Made with  <span><img src={love} />  </span>in India</h1>

<br/>
<h3>No <img  src={copyrights}  width="16px" height="10%" /> Copyright issues,<br/> Feel Free to Copy</h3>
        </div>
    )
}
export default Knowmore;