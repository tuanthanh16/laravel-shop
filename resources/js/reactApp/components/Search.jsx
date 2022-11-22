import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function Search({ keyword, setKeyword }) {
    const [searchKeyword, setSearchKeyword] = useState('');

    const navigate = useNavigate()

    function handleClick(e) {

        if (e.key === 'Enter') {


            setKeyword(searchKeyword)

            navigate("/search");
        }
    }

    //this is called at input OnChange event
    //when we call this function, we get the input value (what user wrote in the search bar) - which is e.target.value
    //and we set the input value (e.target.value) to state (searchKeyword)
    //we are setting the input value to state because then we can access that searchkeyword anywhere else in this component, we are sending it to backend 

    // we are storing the search value in a variable and send it to the backend
    function updateKeyword(e) {
        setSearchKeyword(e.target.value);
    }

    return (
        <>
            <div className="form-group search-form-group">
                <input className='search-input form-control' onChange={updateKeyword} type="text" onKeyDown={handleClick} placeholder='Search...' />
                <i className="bi bi-search"></i>
            </div>
        </>
    )

}


export default Search