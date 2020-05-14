// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // if (page.path.match(/^\/chapterSummary/)) {
  //   // page.matchPath is a special key that's used for matching pages
  //   // with corresponding routes only on the client.
  //   page.matchPath = "/chapterSummary/*"
  //   // Update the page.
  //   createPage(page)
  // }

  // if (page.path.match(/^\/characterSheet/)) {
  //   // page.matchPath is a special key that's used for matching pages
  //   // with corresponding routes only on the client.
  //   page.matchPath = "/characterSheet/*"
  //   // Update the page.
  //   createPage(page)
  // }

  // if (page.path.match(/^\/confirmed/)) {
  //   // page.matchPath is a special key that's used for matching pages
  //   // with corresponding routes only on the client.
  //   page.matchPath = "/confirmed/*"
  //   // Update the page.
  //   createPage(page)
  // }

  if (page.path.match(/^\/user/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/user/*"
    // Update the page.
    createPage(page)
  }

}
