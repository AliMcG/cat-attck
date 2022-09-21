function DisplayCard(props) {
  return ( 
    <div className="display-box">
      <img className="cat-img" src={props.url} alt="" onClick={props.onClick} />
      <p>{props.name}</p>
    </div>
   );
}

export default DisplayCard;