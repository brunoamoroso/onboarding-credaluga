import { AppBar, Container, Grid } from "@mui/material";
import Image from "next/image";
import StepperMobile from "./StepperMobile";
import React from "react";

interface INavbar{
  step: number,
  title: string,
  icon: React.ReactNode,
  progress: number,
  backBtn: boolean,
}

export default function Navbar({step, title, icon, progress, backBtn}: INavbar) {
  return (
    <AppBar position="static" color="default" sx={{paddingTop: {xs: "32px", md: "16px"}, paddingBottom: {xs: "none", md: "16px"}}}>
      <Container disableGutters={true}>
        <Grid container flexDirection={"column"} gap={"32px"}>
          <Grid item paddingLeft={"16px"}>
            <Image
              src={"/credaluga-logo.svg"}
              height={32}
              width={186}
              alt="CredAluga Logo"
            />
          </Grid>

          <Grid item sx={{display:{sm: "flex", md: "none"}}}>
            <StepperMobile step={step} title={title} icon={icon} progress={progress} backBtn={backBtn}/>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
