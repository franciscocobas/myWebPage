import * as React from "react"
import Sidebar from "../components/sidebar"
import AboutMe from "../components/aboutMe"
import NewsPaper from "../components/newsPaper"
import Talks from "../components/talks"
import FeaturedNews from "../components/featuredNews"
import MyStatistics from "../components/myStatistics"
import { talks2020, talks2021 } from "../data/talks"
const IndexPage = () => (
  <div className="grid grid-cols-9 gap-4 h-screen justify-items-center">
    {alert(
      "Mensaje puesto el sabado 19 de junio de 2021: SITIO EN CONSTRUCCION EL DIA DE HOY"
    )}
    <div className="col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-4">
      <div className="sticky top-0 z-10">
        <MyStatistics />
      </div>
      <div className="mb-4">
        <AboutMe />
      </div>
    </div>
    <div className="col-span-3 pr-3">
      <div className="h-screen sticky top-0">
        <NewsPaper />
        <Talks talks={talks2020} year="Charlas 2020" />
        <Talks talks={talks2021} year="Charlas 2021" />
      </div>
    </div>
  </div>
)

export default IndexPage
