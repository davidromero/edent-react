export default (theme) => ({
  main: {
    width: "auto",
    display: "block",
  },
  paper: {
    marginLeft: theme.spacing * 3,
    marginRight: theme.spacing * 3,
    [theme.breakpoints.up(400 + theme.spacing * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto",
    },
    marginTop: theme.spacing * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing * 2}px ${theme.spacing * 3}px ${theme.spacing * 3}px`,
  },
  avatar: {
    margin: theme.spacing,
    height: "100px",
    width: "100px"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing,
  },
  button: {
    marginTop: theme.spacing * 3,
  },
});