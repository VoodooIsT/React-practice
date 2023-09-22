import { useContext, useState } from "react";
import image from "../../assets/logo.png"
import { Link } from "react-router-dom";
import useOnlineStatue from "../utils/useOnlineStatue";
import UserContext from "../utils/userContext";
const Header = () => {

    const [btnState, setBtnState] = useState("Login")
    
    const onlineStatus = useOnlineStatue();

    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="flex items-center justify-between shadow-lg mb-2">
            <div className="mx-10">
                <img 
                    className="w-[150px] px-4"
                    src={image}  />
            </div>
            <div className="flex items-center">
                <ul className="flex items-center gap-x-5 px-4 mx-5">
                    <li>
                        Online status:  {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="bg-slate-900 text-white px-4 py-2" onClick={() => {
                       btnState === "Login" ? setBtnState("Logout"): setBtnState("Login")
                    }}>{btnState}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;