export default (theme) => ({
  homeRoot: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  homeFrame: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    height: "100vh",
    overflow: "auto",
  },
  homeContent: {
    display: "flex",
    flexFlow: "column wrap",
  },
});