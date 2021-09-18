import "./header.css"
import fon from "../images/About-fon.jpg";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">V-STUDIO</span>
                <span className="headerTitleLg">Blog</span>
                
            </div>
            <img className="headerImg" src={fon} alt="" />
        </div>
    )
}
