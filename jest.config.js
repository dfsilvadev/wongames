module.exports = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"]
};
