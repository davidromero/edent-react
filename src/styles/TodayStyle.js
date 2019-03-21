export default (theme) => ({
  base: {
    display: "flex",
    flexFlow: "row wrap",
  },
  paper:{
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    minWidth: "325px",
  },
});