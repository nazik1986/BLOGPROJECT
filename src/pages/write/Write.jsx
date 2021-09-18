import "./write.css"
import writeFon from "../../components/images/v-9.jpg";

export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src={writeFon} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell you story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
