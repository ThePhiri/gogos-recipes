import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

function QuoteSection() {
  return (
    <div className="section quote">
        <p className='quoteText'><FontAwesomeIcon icon={faQuoteLeft}/>Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.</p>
        <p className="qouteAuthor">- Anthony Bourdain</p>

    </div>
  )
}

export default QuoteSection