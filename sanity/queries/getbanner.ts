export const GET_BANNER = `*[_type == "siteBanner"][0]{
  pretitle,
  title,
  description,
  image,
  secondaryImage,
  primaryCta{label, href},
  secondaryCta{label, href},
  socialLinks[]{platform, href}
}`

export default GET_BANNER
