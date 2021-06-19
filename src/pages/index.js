import * as React from "react"
import Sidebar from "../components/sidebar"
import AboutMe from "../components/aboutMe"
import NewsPaper from "../components/newsPaper"
import Talks from "../components/talks"
import FeaturedNews from "../components/featuredNews"
import MyStatistics from "../components/myStatistics"
import { talks } from "../data/talks"
const IndexPage = () => (
  <div className="grid grid-cols-9 gap-4 h-screen justify-items-center">
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
        <Talks talks={talks} />
      </div>
    </div>
  </div>
)

export default IndexPage
