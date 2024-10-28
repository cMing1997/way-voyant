import { presetTypography, presetUno, defineConfig } from 'unocss';

export default defineConfig({
    theme: {
        colors: {
            primary: '#60A3FF',
        },
    },
    presets: [presetUno(), presetTypography()] as any,
});
