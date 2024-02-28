import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
 
 // get all the posts present in our state
 const posts = useSelector( selectAllPosts );

// localeCompare converts date string, sort by date and create a shallow copy of the array
 const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date)) 

 const renderedPosts = orderedPosts.map(post => (
    <article key={ post.id }>
        <h3>{ post.title }</h3>
        {/* get first 100 characters from content */}
        <p>{ post.content.substring(0,100) }</p>
        <p className="postCredit">
            <PostAuthor userId = {post.userId} />
            <TimeAgo timestamp = {post.date} />
       </p>
    </article>
 ));

 return (
    <section>
         <h2>Posts</h2>
        { renderedPosts }
    </section>
 )
};

export default PostsList;