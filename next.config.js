const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add an alias for the public directory
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
