import CircularProgress from "@material-ui/core/CircularProgress";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import Router from 'next/router';

import { authInitialProps } from '../lib/auth';
import { PlaceholderParagraph } from 'semantic-ui-react';
import LeftNav from '../components/UserHome/LeftNav/LeftNav';

const addLineBreaks = string =>
  string.split("\n").map((text, index) => (
    <React.Fragment key={`${text}-${index}`}>
      {text}
      <br />
    </React.Fragment>
  ));

const Index = ({ classes, auth }) => (
  <main className={classes.root}>
    {auth.user && auth.user._id ? (
      //Auth User Page
      <LeftNav
        auth={ auth }
      />
    ) : (
      <Grid
        justify="center"
        alignItems="center"
        direction="row"
        container
        className={classes.heroContent}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {addLineBreaks("Coming Soon \n The Most Badass \n Applicant Tracking System \n Known to Humankind")}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          component="p"
        >
          {/* Replace Text */}
        </Typography>
        <Button
          className={classes.fabButton}
          variant="extendedFab"
          color="primary"
          onClick={() => Router.push("/signin")}
        >
          Signup for Beta
        </Button>
      </Grid>
    )}
  </main>
);

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 10,
    paddingLeft: theme.spacing.unit * 5,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing.unit * 5
    }
  },
  progressContainer: {
    height: "80vh"
  },
  progress: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.secondary.light
  },
  drawerContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  drawer: {
    width: 350
  },
  drawerPaper: {
    marginTop: 70,
    width: 350
  },
  fabButton: {
    margin: theme.spacing.unit * 3
  },
  heroContent: {
    maxWidth: 600,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 6,
    margin: "0 auto"
  }
});

Index.getInitialProps = authInitialProps()

export default withStyles(styles)(Index);
