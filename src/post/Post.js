
export default function Post ({post, fnFather}){

    return (
        <div>
            {post.id} - {post.title} - <button onClick={()=> fnFather(post.id)}>
            Click me </button>
        </div>
    );
}
