import React from "react";
import { Grid, Typography } from "@mui/material";

const messages = [
  "Maiúscula",
  "Minúscula",
  "Número",
  "8 Digítos",
  "Símbolo",
];

interface IPasswordProgressBar {
  validations: Object;
}

function PasswordProgressBar({ validations }: IPasswordProgressBar) {
  const corBarra = (valid: boolean) => {
    return valid ? "#4caf50" : "#BDC7D4";
  };

  return (
    <Grid container item xs gap={"16px"} padding={"0px 2px"}>
      {Object.values(validations).map((valid, index) => (
        <Grid container item key={index} flexDirection={"column"} xs>
          <Grid
            item
            sx={{
                height: "4px",
                borderRadius: "12px",
            }}
            style={{ backgroundColor: corBarra(valid) }}
          ></Grid>
          <Grid item textAlign={"center"}>
            <Typography variant="bodySmall" sx={{fontSize: "0.6875rem"}}>{messages[index]}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default PasswordProgressBar;
