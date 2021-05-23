module.exports = {
    // ...
    extends: [
        "plugin:vue/essential", // 使用 essential 規範
        "eslint:recommended", // 使用 ESLint 推薦規範
    ],
    rules: {
        //...上略
        "no-param-reassign": [2, { props: false }],
    },
};