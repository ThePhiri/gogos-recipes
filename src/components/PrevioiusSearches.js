import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
    faSearch
} from "@fortawesome/free-solid-svg-icons"
const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

function PrevioiusSearches() {
    return (
        <div className='previousSearches section'>
            <div className='searchBox'>
                <input type="text" placeholder='search....' />
                <button className='btn'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <h2>Previous Searches</h2>
            <div className='previousSearchesContainer'>
                {searches.map((search, index) => (
                    <div key={index} style={{ animationDelay: index * .1 + "s" }} className='searchItem' >
                        {search}
                    </div>
                ))}

            </div>

        </div>
    )
}

export default PrevioiusSearches