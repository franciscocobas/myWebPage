import * as React from "react"
import Sidebar from "../components/sidebar"
import AboutMe from "../components/aboutMe"
import NewsSpaper from "../components/newsPaper"
import Talks from "../components/talks"
import FeaturedNews from "../components/featuredNews"
import MyStatistics from "../components/myStatistics"

const IndexPage = () => (
  <div className="grid grid-cols-9 gap-4 h-screen justify-items-center">
    <div className="col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-4">
      <MyStatistics />
      <FeaturedNews />
      <AboutMe />
    </div>
    <div className="col-span-3">
      <NewsSpaper />
      <Talks />
    </div>
  </div>
)

export default IndexPage
