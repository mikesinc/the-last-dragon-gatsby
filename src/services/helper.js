// import axios from "axios"

const checkAuth = {
  userID: void 0,

  authorise: async function() {
    let token = window.localStorage.getItem("access_token")

    //if no token, not authorised.
    if (!token) {
      return false
    }

    //Send current access token to server to verify, if expiry message is received, use refresh token to get new access token
    try {
      return await fetch('https://limitless-beach-12582.herokuapp.com/api/verify', {
      // return await fetch("http://localhost:3001/api/verify", {
        method: "get",
        headers: { authorisation: token },
      })
        .then(res => res.json())
        .then(data => {
          if (data.message && data.message === "jwt expired") {
            return this.getNewToken()
          }
          this.userID = data.name
          return true
        })
    } catch (err) {
      console.log(err, "fetch error")
      return false
    }
  },

  //use refresh token to request new access token and run authorise function again with new access token
  getNewToken: async function() {
    let refreshToken = window.localStorage.getItem("refresh_token")

    if (!refreshToken) {
      return false
    }

    try {
      return await fetch("https://limitless-beach-12582.herokuapp.com/api/user/token", {
      // return await fetch("http://localhost:3001/api/user/token", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: refreshToken }),
      })
        .then(res => res.json())
        .then(data => {
          window.localStorage.setItem(
            "access_token",
            `Bearer ${data.accessToken}`
          )
          return this.authorise()
        })
    } catch (err) {
      console.log(err, "fetch error")
      return false
    }
  },
}

export default checkAuth
