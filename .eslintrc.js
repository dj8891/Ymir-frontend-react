module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [],
    plugins: ["react", "react-hooks", "@typescript-eslint"],
    rules: {
        "no-unused-vars": 0
    },
    settings: {
        react: {
            version: "detect",
        },
    },
};