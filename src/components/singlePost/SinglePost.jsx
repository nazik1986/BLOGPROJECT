import "./singlePost.css"
import mia from "../images/Chicago-3.jpeg";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrraper">
                <img src={mia} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Mia Stelmakh 
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                 </h1>
                 <div className="singlePostInfo">
                     <span className="singlePostAuthor">Author: <b>Nazar</b></span>
                     <span className="singlePostDate">1 hour ago</span>
                 </div>
                 <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat numquam nostrum quod possimus omnis fugiat? At ratione est voluptas omnis porro aliquam velit quas cum eaque, voluptatem vitae eveniet odit?</p>
            </div>
        </div>
    )
}
