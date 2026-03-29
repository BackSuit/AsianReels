import { Text, Box } from "@chakra-ui/layout"
import Link from "next/link"

// Clean modern logo mark for Asian Reels
function ReelMark() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="reelGrad"
          x1="0"
          y1="0"
          x2="38"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="38" height="38" rx="10" fill="url(#reelGrad)" />
      {/* Film strip perforations — left */}
      <rect
        x="3"
        y="8"
        width="3"
        height="3"
        rx="0.75"
        fill="white"
        opacity="0.35"
      />
      <rect
        x="3"
        y="14"
        width="3"
        height="3"
        rx="0.75"
        fill="white"
        opacity="0.35"
      />
      <rect
        x="3"
        y="20"
        width="3"
        height="3"
        rx="0.75"
        fill="white"
        opacity="0.35"
      />
      <rect
        x="3"
        y="26"
        width="3"
        height="3"
        rx="0.75"
        fill="white"
        opacity="0.35"
      />
      {/* Play triangle */}
      <path d="M16 12 L16 26 L27 19Z" fill="white" opacity="0.95" />
    </svg>
  )
}

/**
 * Logo component.
 * @param {boolean} isLight  – if true, renders white text (for dark backgrounds like footer)
 */
export default function Logo({ isLight = false }) {
  return (
    <Box
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      gap={2}
      _hover={{ opacity: 0.85 }}
      lineHeight={1}
      flexShrink={0}
    >
      <ReelMark />
      <Text
        as="span"
        fontSize={{ base: "md", md: "lg" }}
        fontWeight="700"
        fontFamily="'Inter', sans-serif"
        letterSpacing="-0.01em"
        color={isLight ? "white" : "brand.ink"}
        lineHeight={1}
      >
        Asian
        <Text
          as="span"
          color={isLight ? "whiteAlpha.700" : "brand.primary"}
          fontWeight="800"
        >
          Reels
        </Text>
      </Text>
    </Box>
  )
}
