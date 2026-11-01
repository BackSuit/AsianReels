import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import {
  getCategoryBySlug,
  fetchCategorySlug,
  fetchPaginated,
  countArticlesByCategory,
} from "@/libs/api"
import { CATEGORY_ID_ROUTE } from "src/constanst/routes"
import config from "@/contents/site-settings.json"

export default function CategoryPage({ articles, category, pagination, page }) {
  const url = CATEGORY_ID_ROUTE(category.slug)
  const title = `${category.name} - Page ${page}`

  return (
    <Layout>
      <Meta title={title} url={url} />
      <ArticleList
        articles={articles}
        title="Category:"
        subtitle={category.name}
        url={category.slug}
        pagination={pagination}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page)
  const postsPerPage = config.posts_per_page || 9

  try {
    const category = await getCategoryBySlug(params.slug)

    // If category doesn't exist, return 404
    if (!category) {
      return {
        notFound: true,
      }
    }

    const [articles, totalArticles] = await Promise.all([
      fetchPaginated(page, params.slug),
      countArticlesByCategory(params.slug),
    ])

    const pagination = {
      current: page,
      pages: Math.ceil(totalArticles / postsPerPage),
    }

    return {
      props: {
        articles: articles || [],
        category: {
          name: category.name || params.slug,
          slug: category.slug || params.slug,
        },
        pagination,
        page,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching category pagination page data:", error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const postsPerPage = config.posts_per_page || 9
    const categories = await fetchCategorySlug()
    const paths = []

    // Pre-render only up to page 3 per category at build time
    // Deep pages are generated on-demand via fallback: "blocking" and cached by ISR
    const MAX_BUILD_PAGES = 3

    // For each category, create pagination paths
    for (const category of categories) {
      const totalArticles = await countArticlesByCategory(category.slug)
      const pages = Math.min(
        Math.ceil(totalArticles / postsPerPage),
        MAX_BUILD_PAGES
      )

      // Generate paths for pages 2 onwards (page 1 is handled by [slug].js)
      for (let i = 2; i <= pages; i++) {
        paths.push({
          params: {
            slug: category.slug,
            page: i.toString(),
          },
        })
      }
    }

    return {
      paths,
      fallback: "blocking",
    }
  } catch (error) {
    console.error("Error generating category pagination paths:", error)
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}
