const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add an alias for the public directory
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',  // For Google OAuth profile pictures
      'i.pravatar.cc',             // For preview user avatar
    ],
  },
};
