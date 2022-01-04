import Comment from "../Themes/Elements/Comment";

export default function Comments(){
    const list=[1,2,3,4,5,6,7,8,9,10];
    return <>{list.map((i,j)=>(<Comment/>))}</>
}