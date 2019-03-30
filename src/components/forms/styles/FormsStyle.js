export default (theme) => ({
  selectControl: {
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
    textAlign: "start",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    marginTop: "1em",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
  },
  datePicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
  },
  genderGroup:{
    margin: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
    display: "inline-block",
  },
  button: {
    margin: theme.spacing.unit * 2,
  },
});