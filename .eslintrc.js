module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb",
        "airbnb-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parserOptions: { project: "./tsconfig.json" },
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "no-anonymous-exports-page-templates": "warn",
        "limited-exports-page-templates": "warn"
    }
}