import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import blogService from "../../services/blog";

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
    const [limit, setLimit] = useState(4);

    useEffect(()=>{
        (async()=>{
            setArticles(await blogService.getArticles(limit));
        })();
    }, [limit]);

    const onSeemore = async()=>{
        setLimit(limit+4);
        console.log(limit);
    };

    return (
        <div style={{display: "flex", justifyContent: "right", marginRight: "2rem"}}>
            {articles.map((article=><ArticleCard key={ article._id } article={ article } />))}
            <button onClick={ onSeemore }>see more</button>
        </div>
    );
};

export default BlogHome
