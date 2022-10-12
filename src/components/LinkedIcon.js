let LinkedIcon = (props)=>{
    return(
        <a className="linked-icon-link text-light px-2" href={props.href} target="_blank" rel="noreferrer">
            {props.children}
        </a>
    );
};
export default LinkedIcon;