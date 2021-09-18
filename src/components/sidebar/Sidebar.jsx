import "./sidebar.css"
import me from "../images/v-1.jpg";

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img className="sidebarImg" src={me} alt="" />
               <p>V_studio - Студія Вероніка, названа на честь жінки, яка зробила першу в історії "фотографію".
                   <br />
            Принцип нашої роботи: “Легко, просто і змістовно”.</p>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">CATECORIES</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Portret</li>
               <li className="sidebarListItem">Feature</li>
               <li className="sidebarListItem">Family</li>
               <li className="sidebarListItem">Children</li>
               <li className="sidebarListItem">Men</li>
               <li className="sidebarListItem">Girl</li>
           </ul>
<div className="sidebarItem">
<span className="sidebarTitle">FOLLOW US</span>
</div>
<div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
</div>
           </div>
        </div>
    )
}
