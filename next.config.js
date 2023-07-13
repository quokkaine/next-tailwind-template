/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        appDir: true,
        optimzeFonts: false,
        outputStandalone: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
