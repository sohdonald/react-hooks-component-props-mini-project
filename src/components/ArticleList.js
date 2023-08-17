import React from "react";
import posts from "..data/blog";

function ArticleList(post) {
    const getPosts = post.forEach(()=>{
        return(
        <Article 
        key={posts.id}
        />
        );
    })

    return(
        <main>
            {getPosts}
        </main>
    );
}