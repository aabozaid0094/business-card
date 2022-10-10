let Info = (props)=>{
    return(
        <div className="info">
            <img className="picture" src={props.avatar_url} alt={props.name} />
            <h1>{props.name}</h1>
            <div className="bio">{props.bio}</div>
            <div className="blog">{props.blog}</div>
        </div>
    );
};
export default Info;