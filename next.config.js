module.exports = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/api/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  future: {
    webpack5: true,
  },
};
