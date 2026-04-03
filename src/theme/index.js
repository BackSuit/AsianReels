import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  colors: {
    brand: {
      primary: "#6366F1", // Modern indigo
      secondary: "#4F46E5", // Deep indigo
      accent: "#F59E0B", // Warm amber
      cream: "#FFFFFF",
      parchment: "#F8FAFC", // Very light cool gray
      ink: "#1E293B", // Slate-800
      gray: "#64748B", // Slate-500
      lightGray: "#94A3B8", // Slate-400
    },
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    xxl: "96em",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "md",
      },
      variants: {
        primary: {
          bg: "brand.primary",
          color: "white",
          _hover: { bg: "#4F46E5", transform: "translateY(-1px)" },
        },
        outline: {
          borderColor: "brand.primary",
          color: "brand.primary",
          _hover: { bg: "indigo.50" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: "700",
        color: "brand.ink",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
        lineHeight: "1.7",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.primary",
        _hover: { textDecoration: "underline", color: "brand.secondary" },
      },
    },
  },
  styles: {
    global: {
      "::selection": {
        color: "white",
        background: "#6366F1",
      },
      "::-webkit-scrollbar": {
        width: "0.5em",
      },
      "::-webkit-scrollbar-track": {
        background: "#F8FAFC",
      },
      "::-webkit-scrollbar-thumb": {
        transition: "150ms background ease-in-out",
        bgColor: "#CBD5E0",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#A0AEC0",
      },
      html: {
        scrollBehavour: "smooth",
      },
      "html, body": {
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1E293B",
        fontSize: "16px",
        lineHeight: "1.7",
      },
      ".booxtore-logo": {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      },
      ".markdown": {
        "div.end-p": {
          marginBottom: 4,
        },
        a: {
          color: "#6366F1",
          fontWeight: "500",
          _hover: {
            textDecoration: "underline",
            color: "#4F46E5",
          },
        },
        p: {
          lineHeight: "1.9",
          marginY: 6,
          fontSize: "1.1rem",
          color: "#2D3748",
          fontFamily: "'Inter', sans-serif",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 700,
          marginTop: 8,
          marginBottom: 4,
          textOverflow: "ellipsis",
          lineHeight: "1.3",
          color: "#1E293B",
        },
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
        blockquote: {
          pl: 6,
          py: 2,
          my: 6,
          pos: "relative",
          fontStyle: "italic",
          color: "#4A5568",
          bg: "#F8FAFC",
          borderRadius: "md",
          _before: {
            content: "''",
            display: "block",
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "4px",
            bgColor: "#6366F1",
            borderRadius: "full",
          },
        },
        table: {
          maxWidth: "full",
          borderSpacing: 0,
          mt: 6,
          borderRadius: "md",
          overflow: "hidden",
          thead: {
            background: "#F8FAFC",
          },
          th: {
            fontWeight: 600,
            color: "#1E293B",
          },
          "th, td": {
            padding: "0.75em 1em",
            border: "1px solid #E2E8F0",
          },
        },
        "ol, ul": {
          padding: 0,
          fontSize: "lg",
        },
        li: {
          lineHeight: "1.8",
          marginLeft: 6,
          paddingLeft: 2,
          marginBottom: 3,
        },
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "linear-gradient(90deg, #818CF8, #6366F1)",
        pos: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "full",
        height: "3px",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
})

export default theme
