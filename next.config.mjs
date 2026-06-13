/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Keep Vite-era `import Icon from './icon.svg?react'` imports working:
    // `?react` goes through SVGR (React component), plain .svg imports keep
    // Next's default static-asset behavior.
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /react/] },
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: /react/,
        use: ['@svgr/webpack'],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
