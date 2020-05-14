import React from "react"
import { Router } from "@reach/router"
import Chapters from "../components/Chapters"
import ChapterSummary from "../components/ChapterSummary"
import Characters from "../components/Characters"
import CharacterSheet from "../components/CharacterSheet"
import PrivateRoute from "../components/PrivateRoute"
import Forum from "../components/Forum"

const User = () => {
    return (
      <Router basepath="/user">
        <PrivateRoute exact path="/chapters" component={Chapters} />
        <PrivateRoute exact path="/chapters/:id" component={ChapterSummary} />
        <PrivateRoute path="/forum" component={Forum} />
        <PrivateRoute exact path="/characters" component={Characters} />
        <PrivateRoute exact path="/characters/:id" component={CharacterSheet} />
      </Router>
    )
}

export default User