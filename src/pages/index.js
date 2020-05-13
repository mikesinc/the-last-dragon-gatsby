import React from "react"
import { Router } from "@reach/router"
import Chapters from "../components/Chapters"
import ChapterSummary from "../components/ChapterSummary"
import Characters from "../components/Characters"
import CharacterSheet from "../components/CharacterSheet"
import PrivateRoute from "../components/PrivateRoute"
import Home from "./home"
import Forum from "../components/Forum"

export default () => {
    return (
      <Router>
        <Home path="/" />
        <PrivateRoute path="/user/chapters" component={Chapters} />
        <PrivateRoute exact path="/user/chapters/id" component={ChapterSummary} />
        <PrivateRoute path="/user/forum" component={Forum} />
        <PrivateRoute path="/user/characters" component={Characters} />
        <PrivateRoute exact path="/user/characters/id" component={CharacterSheet} />
      </Router>
    )
}