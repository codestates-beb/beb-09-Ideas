import { FaBookReader, FaRobot } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { BsFillBootstrapFill, BsFillCloudsFill} from "react-icons/bs";

const iconComponent = ({icon})=>{
    return(
        <span>
            {icon === 'management' && <FaBookReader size={"20px"}/>}
            {icon === 'blockchain' &&<FaRobot size={"20px"}/>}
            {icon === 'security' && <RiMoneyDollarCircleFill size={"20px"}/>}
            {icon === 'ai' && <BiSolidLockOpenAlt size={"20px"}/>}
            {icon === 'economy' && <BsFillBootstrapFill size={"20px"}/>}
            {icon === 'cloud' && <BsFillCloudsFill size={"20px"}/>}
        </span>
    )
}
export default iconComponent;