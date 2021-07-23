import { ChildAsFC } from "./Child"

const Parent = () => {
    return <div>
        hi there!
        <ChildAsFC color="red" onClick={() => { console.log('Clicked') }} >
            Childern passed by parent
        </ChildAsFC>
    </div>;
};

export default Parent;