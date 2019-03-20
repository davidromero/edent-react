export default theme => ({
  main: {
    width: '100%',
    minWidth: '350px',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  formControl:{
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: '300px',
    maxWidth: '600px',
  },
  datePicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    minWidth: '300px',
    maxWidth: '600px',
  },
  genderGroup:{
    margin: theme.spacing.unit,
    minWidth: '300px',
    maxWidth: '600px',
    display: 'inline-block',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});