export default (theme) => ({
  main: {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: "150px",
    width: "150px",
    margin: theme.spacing.unit,
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
    marginTop: theme.spacing.unit * 2 ,
    minWidth: "180px",
    maxWidth: "600px",
  },
  genderGroup:{
    margin: theme.spacing.unit,
    minWidth: "180px",
    maxWidth: "600px",
    display: "inline-block",
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
  },
});