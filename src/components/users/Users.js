import User from "../user/User";

export default function Users({items, appFn}) {
    return (
        <div>
            {
                items.map((value) => <User key={value.id} item={value} fnFather ={appFn}/>)
            }
        </div>
    );
}
