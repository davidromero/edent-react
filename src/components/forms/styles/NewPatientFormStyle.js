export default (theme) => ({
  paper: {
    width: "100%",
    minWidth: "250px",
    padding: "2px",
  },
  main: {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stepper: {
    padding: "12px",
  },
  button: {
    margin: theme.spacing.unit,
  },
  resultContainer: {
    padding: theme.spacing.unit,
  },
  formControl:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "10px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
  },
  datePicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit ,
    paddingTop: theme.spacing.unit  ,
    minWidth: "180px",
    maxWidth: "600px",
  },
  genderGroup:{
    margin: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
    display: "inline-block",
  },
  base: {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  selectControl: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
    flexWrap: "wrap",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});