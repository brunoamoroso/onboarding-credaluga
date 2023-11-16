import {
  Grid,
  Step,
  StepIcon,
  LinearProgress,
  Typography,
} from "@mui/material";

interface IStepperProps {
  step: number,
  title: string,
  icon: React.ReactNode,
  progress: number,
}

export default function StepperMobile({
  step,
  title,
  icon,
  progress,
}: IStepperProps) {
  return (
    <Grid container gap={"32px"}>
      <Grid
        container
        item
        flexDirection={"row"}
        gap={"8px"}
        alignItems={"center"}
        paddingLeft={"16px"}
      >
        <Grid
          item
          sx={{
            padding: "16px",
            backgroundColor: "#CCE5FF",
            color: "#004575",
            fontSize: "20px",
            letterSpacing: "0px",
            lineHeight: "20px",
            borderRadius: "100px",
          }}
        >
          {icon}
        </Grid>
        <Grid container item flexDirection={"column"} xs={8} gap={"4px"}>
          <Typography variant="labelSmall" color={"#575E6B"}>
            PASSO {step}
          </Typography>

          <Typography variant="labelLargeProminent">{title}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress variant={"determinate"} value={progress} />
      </Grid>
    </Grid>
  );
}
