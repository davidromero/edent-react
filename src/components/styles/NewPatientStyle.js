export default (theme) => ({
  base: {
    display: "flex",
    flexFlow: "row wrap",
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    minWidth: "250px",
    width: "100%",
  },
  stepper: {
    padding: "2px",
    textAlign: "center",
  },
  resultContainer: {
    padding: theme.spacing.unit,
  },
});