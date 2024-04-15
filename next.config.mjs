/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/",
                destination: "/rsa",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
