import ReactPlayer from "react-player";

export const PlayVideo = (prop)=>(
    <ReactPlayer url={'https://www.youtube.com/embed/'+prop.url} width="100%" height="100%" controls={true}/>
)