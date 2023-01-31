import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

function ChefCard({chef}) {
  return (
   <div className="chefCard">
            <img src={chef.img} alt="" />
            <div className="chefCardInfo">
                <h3 className="chefCardName">{chef.name}</h3>
                <p className="chefRecipeCount">Recipes: <b>{chef.recipesCount}</b></p>
                <p className="chefCuisine">Cuisine: <b>{chef.cuisine}</b></p>
                <p className="cheifIcons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
  )
}

export default ChefCard