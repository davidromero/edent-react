export default (theme) => ({
  base: {
    width: "inherit",
    flexDirection: "column",
    alignItems: "center",
  },
  formControl:{
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
  button: {
    margin: theme.spacing.unit,
  },
});