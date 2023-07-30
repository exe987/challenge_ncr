module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
