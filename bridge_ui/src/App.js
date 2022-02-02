import { makeStyles } from "@material-ui/core";
import HeaderText from "./components/HeaderText";

const useStyles = makeStyles((theme) => ({
  bg: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <HeaderText white>Portal is Temporarily Unavailable</HeaderText>
    </div>
  );
}

export default App;
