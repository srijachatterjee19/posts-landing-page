import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; //generate random id 
import { postAdded } from "./postsSlice";


const AddPostForm = () => {
    const dispatch = useDispatch();
    // title and component don't need to be added to global state, hence we utilise useState hooks for the component
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = ()  => {
        // if title and content exist
        // dispatch postAdded action
        if (title && content) {
            dispatch(
                postAdded({title, content, id: nanoid()})
            )
            //then reset title and content
            setTitle('')
            setContent('')
        }
    }

    return (
        <section> 
            <h2> Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                 <button
                    type="button"
                    onClick={onSavePostClicked}
                    // disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm