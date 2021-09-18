import "./post.css"
import mia from "../images/Chicago-1.jpeg";

export default function Post() {
    return (
        <div className="post">
            <div className="postImg">
                <img className="postImgMia" src={mia} alt="" />
            </div>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Portret</span>
                    <span className="postCat">Girl</span>
                </div>
                <span className="postTitle">Елегантна Mia Stelmakh і джазове Чікаго</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">P.S. Колись ми літом купались в річці, а взимку до пізньої ночі ходили з вертепом🎄
Колись маленькі дівчатка зустрілись у великому Чікаго після 12 років...🥰</p>
            </div>
        </div>
    )
}
