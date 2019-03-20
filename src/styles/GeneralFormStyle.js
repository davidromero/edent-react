export default theme => ({
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit }px ${theme.spacing.unit }px ${theme.spacing.unit }px`,
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
    minWidth: '250px',
    maxWidth: '600px',
  },
  datePicker: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2 ,
    minWidth: '250px',
    maxWidth: '600px',
  },
  genderGroup:{
    margin: theme.spacing.unit * 2,
    minWidth: '250px',
    maxWidth: '600px',
    display: 'inline-block',
  },
  submit: {
    marginTop: theme.spacing.unit * 2,
  },
});