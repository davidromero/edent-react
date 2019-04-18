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
    minWidth: "250px",
    width: "100%",
  },
  container:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  itemContainer:{
    margin: theme.spacing.unit * 2,
    minWidth: "240px",
    display: "inline-block",
    padding: theme.spacing.unit ,
  }
});