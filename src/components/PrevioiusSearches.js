
const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup']

function PrevioiusSearches() {
    return (
        <div className='previousSearches section'>

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