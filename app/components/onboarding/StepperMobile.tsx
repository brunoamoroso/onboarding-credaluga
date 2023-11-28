"use client";

import {
  Grid,
  Step,
  StepIcon,
  LinearProgress,
  Typography,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface IStepperProps {
  step: number;
  title: string;
  icon: React.ReactNode;
  progress: number;
  backBtn: boolean;
}

export default function StepperMobile({
  step,
  title,
  icon,
  progress,
  backBtn,
}: IStepperProps) {
  const router = useRouter();
  return (
    <Grid container gap={"32px"}>
      <Grid
        container
        item
        flexDirection={"row"}
        gap={"24px"}
        paddingLeft={"16px"}
        alignItems={"center"}
      >
        {backBtn && (
          <Grid item>
            <IconButton
              color="primary"
              aria-label="fingerprint"
              onClick={() => router.back()}
            >
              <i className="bi bi-arrow-left"></i>
            </IconButton>
          </Grid>
        )}
        <Grid
          container
          item
          flexDirection={"row"}
          gap={"8px"}
          alignItems={"center"}
          xs
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
          <Grid container item flexDirection={"column"} xs gap={"4px"}>
            <Typography variant="labelSmall" color={"#575E6B"}>
              PASSO {step}
            </Typography>

            <Typography variant="labelLargeProminent">{title}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LinearProgress variant={"determinate"} value={progress} />
      </Grid>
    </Grid>
  );
}
