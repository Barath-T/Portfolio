import { useNavigate } from "react-router-dom";

import useTextUpdate from "../../myhooks/useTextUpdate";    
import useImageUpdate from "../../myhooks/useImageUpdate";

import blogService from "../../services/blog";

const Post = ()=>{
    const title = useTextUpdate();
    const desc = useTextUpdate();
    const image = useImageUpdate();
    const content = useTextUpdate();
    
    const navigate = useNavigate();

    const onPost = async(event)=>{
        event.preventDefault();
        try{
            await blogService.tokenValid();
            const data = {
                title: title.value,
                desc: desc.value,
                image: image.image,
                content: content.value
            }
            const response = await blogService.postArticle(data);
            console.log(response);
            navigate("/blog");
        }
        catch(ex){
            console.log(ex);   
        }
    }
    return(
        <div>
            <form onSubmit={onPost}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={title.value} onChange={title.onChange}/>
                <label htmlFor="desc">Description: </label>
                <input type="text" name="desc" value={desc.value} onChange={desc.onChange}/>
                <label htmlFor="image">Image: </label>
                <input type="file" name="image"  onChange={image.onChange}/>
                <label htmlFor="content">Content: </label>
                <textarea type="" name="content" value={content.value} onChange={content.onChange}/>
                <button type="submit">Post</button>
            </form>
        </div>
    );
};

export default Post;
