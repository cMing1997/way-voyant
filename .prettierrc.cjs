module.exports = {
    printWidth: 100,
    // 使用分号
    semi: true,
    // 是否缩进 script 和 style,
    // script 由于是TS交给 typescript-language-features 进行格式化
    vueIndentScriptAndStyle: false,
    // 是否每行只允许一个属性
    singleAttributePerLine: true,
    // 使用单引号
    singleQuote: true,
    // 逗号
    trailingComma: 'all',
    // 换行
    proseWrap: 'never',
    // html 空格敏感度
    htmlWhitespaceSensitivity: 'strict',
    // 换行
    endOfLine: 'auto',
    // 覆盖
    overrides: [
        {
            // 文件
            files: '.*rc',
            // 选项
            options: {
                // 解析器
                parser: 'json',
            },
        },
    ],
    // tab 的大小
    tabWidth: 4,
    // 缩进不使用tab，使用空格
    useTabs: false,
};
