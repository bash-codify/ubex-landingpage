
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
          colors: {
          buttonColor: 'rgba(242, 97, 191, 1)',
          textBackgroundColor: 'linear-gradient(84.24deg, #F261BF -0.5%, #9D96FD 133.28%)',
          textColor: '#FCFCFC',


          },
          fontFamily: {
          redhat: ["Red Hat Display', sans-serif"],
          },
  
          fontSize: {
  
          sm:["clamp(1.3rem, 10vw, 1.3rem)"],
  
          base:["clamp(1.45rem, 10vw, 1.6rem)" ],
  
          lg:["clamp(2rem, 10vw, 2rem)" ],
  
          xl:["clamp(3.2rem, 10vw, 3rem)"],
    
          "2xl":["clamp(4rem, 10vw, 4rem)"],
  
          "3xl":["clamp(5rem, 10vw, 8rem)"],
  
          "4xl":["clamp(6rem, 10vw, 9rem)"],

          "5xl":["clamp(7rem, 10vw, 10rem)"],
          
      },

      fontWeight:{
        font_medium:'500',
        font_bold:'700',
        font_black: '900',
      },
      width:{

        'w90': "90%",
        'ww85': "85%",
        '80': "80%",


      },
      height:{

       'h90': "90vh",


      },

      screens: {

          xs: "360px",
          ss: "500px",
          sm: "768px",
          md: "1024px",
          lg: "1200px",
          xl: "1400px",

      },

      },

  plugins: [],
  },
};
