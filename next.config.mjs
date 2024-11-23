/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placeholder.pics',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.discordapp.com',
                port: '',
                pathname: '/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;