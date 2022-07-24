/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,twig,js}"],
  theme: {
    // fontSize: {
    //   sm: ['13.60px', '20.57px'],
    //   base: ['17.00px', '25.71px'],
    //   lg: ['21.25px', '32.14px'],
    //   xl: ['26.56px', '40.19px'],
    //   '2xl': ['33.20px', '50.23px'],
    //   '3xl': ['41.50px', '62.79px'],
    //   '4xl': ['51.88px', '78.47px'],
    //   '5xl': ['64.85px', '98.09px'],
    // },
    extend: {
      colors: {
        "knappe-rot": "#BF2821",
      },
      fontWeight: {
        bold: 600,
      },
    },
  },
  plugins: [],
};
