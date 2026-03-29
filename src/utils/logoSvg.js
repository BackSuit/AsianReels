/**
 * Asian Reels logo SVG generator — shared between generate-icons.js and Logo.js.
 *
 * Film-reel inspired icon matching the ReelMark in Logo.js.
 * SVG's viewBox attribute handles scaling to any output size automatically.
 *
 * Pure CommonJS — safe to require() in Node.js scripts.
 */

function getReelMarkSvg(size, bgColor) {
  var s = size || 38
  return (
    '<svg width="' +
    s +
    '" height="' +
    s +
    '" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">\n' +
    '  <defs><linearGradient id="reelGrad" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">' +
    '<stop offset="0%" stop-color="#818CF8"/><stop offset="100%" stop-color="#4F46E5"/>' +
    "</linearGradient></defs>\n" +
    '  <rect width="38" height="38" rx="10" fill="url(#reelGrad)"/>\n' +
    '  <rect x="3" y="8" width="3" height="3" rx="0.75" fill="white" opacity="0.35"/>\n' +
    '  <rect x="3" y="14" width="3" height="3" rx="0.75" fill="white" opacity="0.35"/>\n' +
    '  <rect x="3" y="20" width="3" height="3" rx="0.75" fill="white" opacity="0.35"/>\n' +
    '  <rect x="3" y="26" width="3" height="3" rx="0.75" fill="white" opacity="0.35"/>\n' +
    '  <path d="M16 12 L16 26 L27 19Z" fill="white" opacity="0.95"/>\n' +
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
