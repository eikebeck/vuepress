module.exports = {
    title: 'Hello',
    themeConfig: {
        nav: [
            {text: 'Another Page', link: '/projektionen.html'}
        ],
        sidebar: [
            '/',
            '/projektionen'
        ]
    },
    plugins: {
        mathjax: {
            target: 'chtml',
            presets: [
                '\\def\\lr#1#2#3{\\left#1#2\\right#3}'
            ]
        }
    },
    
}