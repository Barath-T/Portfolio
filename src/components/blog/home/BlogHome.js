import { useEffect, useState } from "react";

import { Div, ArticlesDiv, ArticleLink } from "./BlogHome.styled";
import { Button } from "components/home/Home.styled";

import blogService from "services/blog";

const ArticleCard = ({ article })=>{
    return (
        <ArticleLink to={`/blog/${article._id}`}>
            <h1>{ article.title }</h1>
            <p>{ article.desc }</p>
        </ArticleLink>
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
        <Div>
            <ArticlesDiv>
                {articles.map((article=><ArticleCard key={ article._id } article={ article } />))}
            </ArticlesDiv>
            {limit 
                ? <Button onClick={ onSeemore }>see more</Button>
                : null
            }
        </Div>
    );
};

export default BlogHome
