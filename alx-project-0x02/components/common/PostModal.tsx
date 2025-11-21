
const PostModal= () => {
    return (
        <form className=" w-50 flex flex-col justify-center gap-7">
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" placeholder="Title of Text" required/>
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" required> </textarea>
            </div>
            <input type="submit" value="submit"  />
        </form>
    )
}
export default PostModal