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
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;