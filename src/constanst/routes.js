export const HOME_ROUTE = "/"
export const ARTICLE_ROUTE = "/article"
export const MAGAZINE_ROUTE = "/magazine"
export const ENTERTAINMENT_ROUTE = "/entertainment"
export const AUTHORS_ROUTE = "/authors"
export const ABOUT_US_ROUTE = "/about-us"
export const MEET_THE_TEAM_ROUTE = "/meet-the-team"
export const CATEGORIES_ROUTE = "/category"

export const ARTICLE_ID_ROUTE = id => `${ARTICLE_ROUTE}/${id}`
export const CATEGORY_ID_ROUTE = id => `${CATEGORIES_ROUTE}/${id}`
export const AUTHOR_ID_ROUTE = id => `${AUTHORS_ROUTE}/${id}`
export const ARTICLE_PAGE_ROUTE = page => `${ARTICLE_ROUTE}/page/${page}`

// Generate navigation links from categories
export const getNavigationLinks = (categories = []) => {
  const links = [
    {
      name: "Home",
      to: HOME_ROUTE,
    },
  ]

  // Add all category links to navbar
  categories.forEach(category => {
    links.push({
      name: category.name,
      to: CATEGORY_ID_ROUTE(category.slug),
    })
  })

  return links
}

// Default navigation links (used as fallback)
export const navigationLinks = [
  {
    name: "Home",
    to: HOME_ROUTE,
  },
]

// Footer links - organized for an Asian entertainment site
export const footerLinks = [
  { name: "Home", path: HOME_ROUTE },
  { name: "All Articles", path: ARTICLE_ROUTE },
  { name: "K-Drama", path: CATEGORY_ID_ROUTE("kdrama") },
  { name: "Movies", path: CATEGORY_ID_ROUTE("movies") },
  { name: "Anime", path: CATEGORY_ID_ROUTE("anime") },
  { name: "Authors", path: AUTHORS_ROUTE },
  { name: "About Us", path: ABOUT_US_ROUTE },
]

// Additional footer category links
export const footerCategoryLinks = [
  { name: "J-Drama", path: CATEGORY_ID_ROUTE("jdrama") },
  { name: "C-Drama", path: CATEGORY_ID_ROUTE("cdrama") },
  { name: "Bollywood", path: CATEGORY_ID_ROUTE("bollywood") },
  { name: "Reviews", path: CATEGORY_ID_ROUTE("reviews") },
  { name: "Actors & Idols", path: CATEGORY_ID_ROUTE("actors") },
  { name: "Lists & Guides", path: CATEGORY_ID_ROUTE("lists") },
]
