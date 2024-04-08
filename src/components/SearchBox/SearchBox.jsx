import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {selectNameFilter, setNameFilter} from "../../redux/filtersSlice.js";


const SearchBox = () => {
    const dispatch = useDispatch();
    const value = useSelector(selectNameFilter)

    return (
        <div className={styles.searchBox}>
            <input type="text"
                   value={value}
                   onChange={(e)=>dispatch(setNameFilter(e.target.value))}
            />
        </div>
    );
}

export default SearchBox;