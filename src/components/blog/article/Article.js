import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import blogService from "services/blog";
import useTextUpdate from "myhooks/useTextUpdate";

const Comments = ({ article, setArticle, userLogged})=>{
    const commentField = useTextUpdate();

    const navigate = useNavigate();

    const postComment = async()=>{
        if(userLogged){
            try{
                const newArticle = await blogService.postComment(article._id, commentField.value);

                setArticle(newArticle);
                commentField.setValue("");
            }
            catch(ex){
                console.log(ex);
            }
        }else{
            navigate("/blog/login");
        }
    }

    return(
        <div>
            <input type="text" name="comment-field" value={commentField.value} onChange={commentField.onChange} placeholder="add a comment!"/>
            <button onClick={ postComment }>post</button>
            {article.comments && (article.comments.length > 0)
                ? article.comments.map(comment=>{
                    return(
                        <div key={ comment._id }>
                            <strong>{ comment.author.username }</strong>
                            <p>{ comment.comment }</p>
                        </div>
                    );
                })
                : <div> be the first one to comment!</div>
            }
        </div>
    );
};

const Article = ()=>{
    const { id } = useParams();
    const [article, setArticle] = useState({});
    
    const { userLogged } = useOutletContext();

    useEffect(()=>{
        (async()=>{
        setArticle(await blogService.getArticle(id));
        })();
    }, [id]);

    return (
        <div>
            <p>{article._id}</p>
            <h1>{article.title}</h1>
            <p>{article.desc}</p>
            <img src={article.image} style={{width: "30vw"}} alt="no img"/>
            <p>{article.content}</p>
            <Comments article={ article } setArticle={ setArticle } userLogged={ userLogged }/>
        </div>
    );
};

export default Article;
