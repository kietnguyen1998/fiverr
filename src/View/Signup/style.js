import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    container: {
      width: "45%",
      margin: "auto",
    },
    formControl: {
      width: "100%",
      display: "block",
      marginBottom: 30
    },
  };
});

export default useStyle;
