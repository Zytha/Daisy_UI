module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
    ],
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
    ],

    // daisyUI
    daisyui: {
        themes: [
            {
                Default: {                            
                    "primary": "#3ABFF8", 
                    "secondary": "#6b7280",         
                    "accent": "#9333ea",        
                    "neutral": "#191D24",       
                    "base-100": "#2A303C",      
                    "info": "#3ABFF8",     
                    "success": "#36D399",     
                    "warning": "#FBBD23",     
                    "error": "#F87272",
                }
            }
        ]
    }

};
