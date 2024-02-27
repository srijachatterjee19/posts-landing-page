import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";


const PostsList = () => {
 
 // get all the posts present in our state
 const posts = useSelector( selectAllPosts );

 const renderedPosts = posts.map(post => (
    <article key={ post.id }>
        <h3>{ post.title }</h3>
        {/* get first 100 characters from content */}
        <p>{ post.content.substring(0,100) }</p>
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