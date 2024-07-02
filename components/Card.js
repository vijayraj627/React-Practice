const Card = (props) =>{
    return(
        <div className="card-item">
                <img className="card-item-img" src={props.menuData.foodImg}/>
                <h3>{props.menuData.foodName}</h3>
                <h3>{props.menuData.hotelName}</h3>
                <h3>{props.menuData.rating}</h3>
            </div>
    )
}

export default Card;