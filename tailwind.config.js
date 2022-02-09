module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          bannerpink: "#FFF4EA",
          linkgreen: "#08BD37",
          linkgray: "#F9F9F9",
          iconyellow: "#FC830A",
          bordergray: "#BDBDBD",
          neautraltext: "#3F3E3E",
        },
        fontFamily: {
          circular: "'Circular Std', 'sans-serif'",
          Inter: "Inter, 'sans-serif'",
        },
        boxShadow: {
          list: "0px 4px 30px rgba(0, 0, 0, 0.08)",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false,
    },
  };