import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import blogService from "services/blog";

const ArticleCard = ({ article })=>{
    return (
        <Link to={`/blog/${article._id}`}>
            <h4>{ article.title }</h4>
            <p>{ article.desc }</p>
        </Link>
    );
}
const BlogHome = ()=>{
    const [articles, setArticles] = useState([]);
    const [limit, setLimit] = useState(2);
    const [prev, setPrev] = useState(0);

    useEffect(()=>{
        (async()=>{
            const data = await blogService.getArticles(limit);
            if(data.length === prev){
                setLimit(0);
            }
            else{
                setArticles(data);
            }
        })();
    }, [limit, prev]);

    const onSeemore = async()=>{
        setPrev(articles.length);
        setLimit(limit+2);
    };

    return (
        <div style={{display: "flex", justifyContent: "right", marginRight: "2rem"}}>
            {articles.map((article=><ArticleCard key={ article._id } article={ article } />))}
            {limit
            ? <button onClick={ onSeemore }>see more</button>
            : null
            }
        </div>
    );
};

export default BlogHome
