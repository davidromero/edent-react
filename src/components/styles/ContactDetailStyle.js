export default (theme) => ({
  base: {
    display: "flex",
    flexFlow: "row wrap",
  },
  paper:{
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    minWidth: "250px",
    width: "100%",
  },
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding: "12px",
  },
  itemContainer:{
    margin: theme.spacing.unit,
    display: "inline-block",
    padding: theme.spacing.unit * 2,
    minWidth: "220px",
  },
  avatar:{
    minWidth: "150px",
    minHeight: "150px",
  },
  avatarContainer:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  typo:{
    margin: "8px",
    padding: "8px",
  }
});