import { useSelector } from "react-redux";
import { selectAdverts } from "redux/selectors";

export const AdvertsList = () => {
    const adverts = useSelector(selectAdverts)

    return(
        <div>
            {adverts.map(item => 
            <li key={item.id}>
                !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            </li>)}
        </div>
    )
}