import { Text, Box, VStack } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

// Film-reel inspired icon mark for Asian Reels
function ReelMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Gradient background */}
      <defs>
        <linearGradient id="reelGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E53E6B" />
          <stop offset="100%" stopColor="#1B1464" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="10" fill="url(#reelGrad)" />
      {/* Outer reel circle */}
      <circle cx="22" cy="22" r="14" stroke="white" strokeWidth="2" fill="none" opacity="0.85" />
      {/* Center hub */}
      <circle cx="22" cy="22" r="4" fill="white" opacity="0.9" />
      {/* Sprocket holes */}
      <circle cx="22" cy="11" r="2.5" fill="white" opacity="0.7" />
      <circle cx="22" cy="33" r="2.5" fill="white" opacity="0.7" />
      <circle cx="11" cy="22" r="2.5" fill="white" opacity="0.7" />
      <circle cx="33" cy="22" r="2.5" fill="white" opacity="0.7" />
      {/* Play triangle */}
      <path d="M20 18 L20 26 L27 22Z" fill="white" opacity="0.95" />
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
      <VStack spacing={0} align="flex-start">
        <Text
          as="span"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="800"
          fontFamily="'Raleway', 'Segoe UI', sans-serif"
          letterSpacing="-0.02em"
          color={isLight ? "white" : "brand.ink"}
          lineHeight={1}
        >
          ASIAN
        </Text>
        <Text
          as="span"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="700"
          fontFamily="'Raleway', 'Segoe UI', sans-serif"
          letterSpacing="0.18em"
          color={isLight ? "gray.300" : "brand.primary"}
          lineHeight={1.3}
          textTransform="uppercase"
        >
          Reels
        </Text>
      </VStack>
    </Box>
  )
}
