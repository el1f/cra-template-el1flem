import { PaletteType } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import {
  createMuiTheme,
  responsiveFontSizes,
  TypographyStyle
} from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";
import createTypography from "@material-ui/core/styles/createTypography";

const defaultTheme = createMuiTheme();

const titleStyle = {
  fontFamily: "Poppins",
  fontWeight: 500
};

const titleTypes = ["h1", "h2", "h3", "h4", "h5", "h6"] as [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
];

const titlesStyles = titleTypes.reduce(
  (styles, key) => ({
    ...styles,
    [key]: {
      ...defaultTheme.typography[key],
      ...titleStyle,
      marginBottom: key === "h6" ? 0 : ".5rem"
    }
  }),
  {}
) as Record<"h1" | "h2" | "h3" | "h4" | "h5" | "h6", TypographyStyle>;

const paletteOptions = {
  primary: {
    main: "#26C485"
  },
  secondary: blue
};

const palette = createPalette(paletteOptions);

const typography = createTypography(palette, {
  fontFamily: ["Work Sans", "Roboto", "Helvetica Neue"].join(","),
  ...titlesStyles,
  h1: {
    ...titlesStyles.h1,
    fontSize: "3rem"
  },
  h2: {
    ...titlesStyles.h2,
    fontSize: "2.6rem"
  },
  h3: {
    ...titlesStyles.h3,
    fontSize: "2rem"
  },
  h4: {
    ...titlesStyles.h4,
    fontSize: "1.8rem"
  },
  h5: {
    ...titlesStyles.h5,
    fontSize: "1.4rem"
  },
  h6: {
    ...titlesStyles.h6,
    fontSize: "1.2rem"
  },
  body1: {
    fontWeight: 500,
    fontSize: "1.125rem",
    marginBottom: ".8rem"
  },
  body2: {
    fontWeight: 500
  },
  button: {
    fontFamily: "Poppins",
    textTransform: "capitalize"
  }
});

const themeBase = {
  palette,
  typography: {
    ...typography,
    h2: {
      ...typography.h2,
      fontWeight: 700
    }
  },
  shape: {
    borderRadius: 12
  },
  overrides: {
    MuiButton: {
      root: {
        height: 48
      },
      sizeLarge: {
        height: 56,
        borderRadius: 20
      },
      contained: {
        boxShadow: "none"
      },
      outlined: {
        borderWidth: 3
      }
    },
    MuiAutocomplete: {
      root: {
        padding: 0
      },
      inputRoot: {
        paddingLeft: 20,
        '&[class*="MuiFilledInput-root"]': {
          padding: 0,
          paddingLeft: 16,
          paddingRight: 32
        }
      }
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      input: {
        paddingLeft: 20,
        borderRadius: "inherit"
      }
    },
    MuiOutlinedInput: {
      root: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,

        "&$focused $notchedOutline": {
          borderWidth: 3
        }
      },
      notchedOutline: {
        borderWidth: 3
      },
      input: {
        paddingLeft: 20,
        borderRadius: "inherit"
      }
    },
    MuiInputLabel: {
      filled: {
        paddingLeft: 10
      }
    }
  },
  props: {
    MuiFilledInput: {
      disableUnderline: true
    }
  }
};

export const lightTheme = responsiveFontSizes(createMuiTheme(themeBase));

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...themeBase,
    palette: {
      ...paletteOptions,
      type: "dark"
    }
  })
);

export const getTheme = (type: PaletteType) =>
  type === "light" ? lightTheme : darkTheme;
