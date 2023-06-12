import { defineConfig } from "vitepress"
export default defineConfig({
    title: 'VitePress',
    description: 'Just playing around.',
    lastUpdated: true,
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo.svg',
        siteTitle: 'VitePress',
        // 搜索
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
        // 导航栏
        nav: nav(),
        // 侧边栏
        sidebar: sidebar(),
        // 图标超链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        ],
        // 页面脚部
        footer: {
            message: 'Released under the MIT License.',
            copyright: '粤ICP备2023059780号-1'
        },
        // 编辑链接
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

    },

})

function nav() {
    // 导航栏
    return [
        { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
        {
            text: "Version",
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                },
            ],
        },
    ]
}
function sidebar() {
    // 侧边栏
    return [
        {
            text: 'Introduction',
            collapsible: true,
            items: [
                { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
                { text: 'Getting Started', link: '/guide/getting-started' },
            ]
        }
    ]
}