import Post from "../post/Post";

export default function Posts({items, appFn}) {

    return (
        <div>{
            items.map((value) => <Post post={value} fnFather={appFn}/>)
        };

        </div>
    );
}

