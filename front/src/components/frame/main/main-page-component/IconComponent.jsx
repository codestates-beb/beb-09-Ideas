import { FaBookReader, FaRobot } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { BsFillBootstrapFill, BsFillCloudsFill} from "react-icons/bs";

const iconComponent = ({icon})=>{
    return(
        <div>
            {icon === 'management' && <FaBookReader/>}
            {icon === 'blockchain' &&<FaRobot/>}
            {icon === 'security' && <RiMoneyDollarCircleFill/>}
            {icon === 'ai' && <BiSolidLockOpenAlt/>}
            {icon === 'economy' && <BsFillBootstrapFill/>}
            {icon === 'cloud' && <BsFillCloudsFill/>}
        </div>
    )
}
export default iconComponent;