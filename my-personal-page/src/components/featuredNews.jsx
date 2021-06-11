import * as React from "react"
import yoImg from "../images/yo.jpg"
import CardsWithoutTitle from "../components/cardsWithoutTitle"

const FeaturedNews = () => {
  return (
    <CardsWithoutTitle
      img={yoImg}
      tag={"Seguridad Informatica"}
      text="Damian Sire detecta y reporta agujero de seguridad en la
                        Universidad de la Republica (Udelar) que exponia datos personales
                        de cientos de miles de estudiantes, docentes y egresados."
    />
  )
}

export default FeaturedNews
