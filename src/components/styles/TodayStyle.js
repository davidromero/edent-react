export default (theme) => ({
  base: {
    display: "flex",
    flexFlow: "row wrap",
  },
  paper:{
    paddingTop: theme.spacing * 2,
    paddingBottom: theme.spacing * 2,
    margin: theme.spacing,
    minWidth: "325px",
  },
});