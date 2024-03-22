import { useSelector } from "react-redux";
import { selectAdverts } from "../../redux/selectors";

export const AdvertsList = () => {
    const adverts = useSelector(selectAdverts)
    console.log(adverts)

    return(
        <div>
            {adverts.map(item => 
            <li key={item.id}>
                <img alt="camper" src={`${item.gallery}`}/>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
                <p>{`${item.rating}(${item.reviews.length} Reviews)`}</p>
                <p>{item.location}</p>
                <p>{item.description}</p>
                <button type="button">Show more</button>
            </li>)}
        </div>
    )
}