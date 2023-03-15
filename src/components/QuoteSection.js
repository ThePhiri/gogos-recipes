import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

function QuoteSection() {
  return (

    <div className="w-full flex-col justify-between p-[20px] bg-orange-200">
      <div className=" max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="py-3 text-2xl">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-orange-600 pr-2 " />
            Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.
          </p>
          <p className="qouteAuthor">- Anthony Bourdain</p>
        </div>

      </div>
    </div>

  )
}

export default QuoteSection

