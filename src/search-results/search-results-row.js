import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./search-results.css";

const SearchResultsRow = ({ house }) => {
    const history = useHistory();
    const setActive = () => {
        history.push(`/houese/${house.id}`)
    }
    return ( 
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.price}</td>
            <td>{house.likes}</td>
        </tr>
     );
};
 
export default SearchResultsRow;