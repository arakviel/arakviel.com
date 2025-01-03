export default defineNuxtConfig({
    // https://github.com/nuxt-themes/docus
    extends: ['@nuxt-themes/docus'],
    devtools: { enabled: true },

    modules: [
    ],
    compatibilityDate: '2024-10-24',
    content: {
        highlight: {
            theme: {
                // Default theme (same as single string)
                default: 'github-light',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            },
            langs: [
                'c',
                'cpp',
                'java',
                'xml',
                'c#',
                'kotlin',
                'sql',
            ]
        }
    },
    css: [
        '@/assets/css/global.css', // шлях до вашого файлу
    ],
})
