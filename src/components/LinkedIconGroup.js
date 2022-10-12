let LinkedIconGroup = (props)=>{
    return(
        <div className={`linked-icon-group d-flex justify-content-${props.justifyContent}`}>
            {props.children}
        </div>
    );
};
export default LinkedIconGroup;