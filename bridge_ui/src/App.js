import { makeStyles, Link, Container, Typography} from "@material-ui/core";
import Header from "./images/Header.png";

const useStyles = makeStyles((theme) => ({
  bg: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  headerImage: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    background: `url(${Header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top -500px center",
    backgroundSize: "2070px 1155px",
    width: "100%",
    height: 1155,
  },
  centeredContainer: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(26),
    minHeight: 208,
    textAlign: "center",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div className={classes.content}>
        <div className={classes.headerImage} />
           <Container maxWidth="md">
             <div className={classes.centeredContainer} style={{marginBottom: 30}}>
              <Typography
                variant="h2"
                component="h2"
              >
                We're actively working to get Portal back up and running.
              </Typography>
          </div>
          <div className={classes.centeredContainer} style={{marginTop: 0}}>

            <Typography
              variant="h2"
              component="h2"
            >
              A fix has been deployed and all funds are safe.
            </Typography>
        </div>
        </Container>

        <Container maxWidth="lg">
          <div className={classes.centeredContainer} style={{marginBottom: 0}}>
              <Typography
                variant="h2"
                component="h2"
              >
                Thank you for your support and trust.
            </Typography>
            </div>
            <div className={classes.centeredContainer} style={{marginTop: 0}}>
              <Typography
                variant="h2"
                component="h2"
              >
                For more updates, please follow us on&nbsp;
                <Link
                  href="https://twitter.com/wormholecrypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  className={classes.link}
                >twitter</Link>.
              </Typography>
          </div>
        </Container>
       </div>
    </div>
  );
}

export default App;
