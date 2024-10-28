// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@unocss/nuxt',
        '@nuxt/image',
        '@nuxtjs/seo',
        '@nuxtjs/color-mode',
        '@nuxt/ui',
        '@vueuse/nuxt',
    ],
});
