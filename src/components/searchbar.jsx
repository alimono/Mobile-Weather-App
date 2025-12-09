
//Pass city and onCityChange as props from parent component
const SearchBar = ({ location, onLocationChange, onSearch }) => {

    const handleChange = (e) => {
        onLocationChange(e.target.value); // Notify parent component of the change
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(); // Trigger to perform weather data search
        }
    }

    return (
        <div className="search-bar-container">
            <div className="input-wrapper">
                {/*Click search icon to fetch weather data*/}
                <i className="f7-icons search-icon"
                    onClick={onSearch}
                    style={{cursor: "pointer"}}>
                    search
                </i>
                {/*Update location state on input change*/}
                <input 
                className="input-field" 
                placeholder="Type in your city" 
                value={location} 
                onChange={handleChange} 
                onKeyDown={handleKeyPress} />
            </div>
        </div>
        
    );
};

export default SearchBar;