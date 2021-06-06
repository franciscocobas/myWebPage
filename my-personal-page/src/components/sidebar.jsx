import * as React from "react"
import profileImg from "../images/profile.jpg"

const Sidebar = () => (
  <div
    className="p-6 h-screen sticky top-0"
    style={{ backgroundImage: 'url("https://i.imgur.com/icFY0WL.jpg")' }}
  >
    <div>
      <img src={profileImg} className="rounded-full" />
    </div>
    <div>Youtuber de desarrollo de software</div>
    <div>Creador de contenido</div>
    <div>Full stack developer</div>
    <div>AngularMVD and JavaScriptMVD co-organizer</div>
    <div>
      <div>Mis Redes sociales</div>
      <div>
        <a
          className="link"
          id="youtubeLink"
          rel="noreferrer"
          target="_blank"
          href="https://www.youtube.com/c/damiansiredesarrollo"
        >
          Youtube
        </a>
        <a
          className="link"
          id="twitterLink"
          rel="noreferrer"
          target="_blank"
          href="https://www.twitter.com/damiansiredesarrollo"
        >
          Twitter
        </a>
        <a
          className="link"
          id="instagramLink"
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/damiansire/"
        >
          Instagram
        </a>
        <a className="link" href="mailto:damiansirecontacto@gmail.com">
          Email
        </a>
      </div>
    </div>
    <div>
      <div>Mis guias:</div>
      <div>
        <a
          className="link"
          id="angularDocLink"
          rel="noreferrer"
          target="_blank"
          href="https://angular.damiansire.com/"
        >
          Angular
        </a>
        <a
          className="link"
          id="javascriptDocLink"
          rel="noreferrer"
          target="_blank"
          href="https://javascript.damiansire.com/"
        >
          Javascript
        </a>
      </div>
    </div>
    <div>
      <a
        className="link"
        id="SuggestMeLink"
        rel="noreferrer"
        target="_blank"
        href="https://forms.gle/Qq8j2Zy7FgFcL7dM7/"
      >
        Dame una sugerencia / feedback aca
      </a>
    </div>
  </div>
)

export default Sidebar

//    style="background-image: url(https://i.imgur.com/icFY0WL.jpg)"
