/**
 * Asian Reels logo SVG generator — shared between generate-icons.js and Logo.js.
 *
 * Film-reel inspired icon matching the ReelMark in Logo.js.
 * SVG's viewBox attribute handles scaling to any output size automatically.
 *
 * Pure CommonJS — safe to require() in Node.js scripts.
 */

function getReelMarkSvg(size, bgColor) {
  var s = size || 44
  return (
    '<svg width="' +
    s +
    '" height="' +
    s +
    '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <defs><linearGradient id="reelGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">' +
    '<stop offset="0%" stop-color="#E53E6B"/><stop offset="100%" stop-color="#1B1464"/>' +
    "</linearGradient></defs>\n" +
    '  <rect width="44" height="44" rx="10" fill="url(#reelGrad)"/>\n' +
    '  <circle cx="22" cy="22" r="14" stroke="white" stroke-width="2" fill="none" opacity="0.85"/>\n' +
    '  <circle cx="22" cy="22" r="4" fill="white" opacity="0.9"/>\n' +
    '  <circle cx="22" cy="11" r="2.5" fill="white" opacity="0.7"/>\n' +
    '  <circle cx="22" cy="33" r="2.5" fill="white" opacity="0.7"/>\n' +
    '  <circle cx="11" cy="22" r="2.5" fill="white" opacity="0.7"/>\n' +
    '  <circle cx="33" cy="22" r="2.5" fill="white" opacity="0.7"/>\n' +
    '  <path d="M20 18 L20 26 L27 22Z" fill="white" opacity="0.95"/>\n' +
    "</svg>"
  )
}

// Keep backward-compatible names
function getMountainMarkSvg(size, bgColor) {
  return getReelMarkSvg(size, bgColor)
}

function generateLogoSvg(opts) {
  var o = opts || {}
  return getReelMarkSvg(o.size || 100, o.bgColor)
}

module.exports = {
  getMountainMarkSvg: getMountainMarkSvg,
  getReelMarkSvg: getReelMarkSvg,
  generateLogoSvg: generateLogoSvg,
}
