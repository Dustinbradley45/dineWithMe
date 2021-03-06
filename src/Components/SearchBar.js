import React from 'react';

const SearchBar = (props) => {

    return (
        <form
            action="submit"
            onSubmit={(event) => props.onSearchSubmit(event)}
            className="searchBarForm"
        >
        

            <section className="searchBarLeft">
                <div className="keywordSearch">
                    <label htmlFor="mainSearchBar" className="visibilityHidden">Search for local cuisine</label>
                        <input 
                        type="text" 
                        className="mainSearchBar"
                        placeholder="Search Cuisine" 
                        name="cuisineTextInput"
                        onFocus={(event) => props.onFocusEvent(event)}
                        onChange={(event) => props.onChangeEvent(event)}
                        value={props.cuisineTextInputValue}
                        
                    >
                    </input>
                    </div>
                    
                     <div className="locationFilter">
                    <label htmlFor="locationSearch" className='visibilityHidden'>Search by City</label>
                    <input 
                        type="text"
                        placeholder="Search location"
                        onFocus={(event) => props.onFocusEvent(event)}
                        onChange={(event) => props.onChangeEvent(event)}
                        value={props.locationTextInputValue}
                        name="locationTextInput"
                        className="locationSearch"
                        
                    />

                    </div>
                </section>

                <div className="buttonContainer">
                    <button type="submit"
                        onClick={props.animateHeaderHeight}>Search
                    </button>

                    
                    <button type="button"
                    className="filterButton"
                        onClick={props.showFilterOptions}>
                        {

                            props.filterVisibility === true ?
                                'Hide Filters' : 'Show Filters'
                        }
                    </button>
                </div>



        </form>
    )
}

export default SearchBar;