/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#78716c",     
          "secondary": "#D926AA",     
          "accent": "#1FB2A5",      
          "neutral": "#191D24",      
          "base-100": "#2A303C",     
          "info": "#3ABFF8",     
          "success": "#36D399",   
          "warning": "#FBBD23",   
          "error": "#F87272",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

