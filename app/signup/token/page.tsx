"use client";

import Navbar from "@/app/components/onboarding/navbar";
import {
  Container,
  Grid,
  Typography,
  Button,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { Metadata } from "next";
import TokenInput from "@/app/components/tokenInput/tokenInput";
import {
  KeyboardEvent,
  ClipboardEvent,
  SyntheticEvent,
  useEffect,
  useState,
  MouseEvent,
} from "react";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { useRouter } from "next/navigation";
import WhatsAppFab from "@/app/components/onboarding/whatsAppFab";

const metadata: Metadata = {
  title: "Token",
};

export default function Token() {
  const router = useRouter();
  const [timer, setTimer] = useState("2:00");
  const [resendToken, setResendToken] = useState(true);
  const [openSnack, setOpenSnack] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [cellphone, setCellphone] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const [minutes, seconds] = timer.split(":").map(Number);

      if (minutes >= 0) {
        if (seconds === 0 && minutes === 0) {
          setResendToken(false);
        } else if (seconds === 0 && minutes > 0) {
          setTimer(`${minutes - 1}:59`);
        } else {
          const newSeconds = seconds - 1;
          const formateedSeconds =
            newSeconds < 10 ? `0${newSeconds}` : newSeconds;
          setTimer(`${minutes}:${formateedSeconds}`);
        }
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    //do a fetch here

    //mask cellphone
    const mockCell = "(48)99965-3215";
    setCellphone(
      mockCell.replace(/(\(\d{2}\))(.\d{4,5})(.\d{4})/g, "$1*****$3")
    );
  }, [cellphone]);

  function handleResendToken() {
    setResendToken(true);
    setTimer("2:00");
    setOpenSnack(true);
  }

  function handleSnackClose(e: SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  }

  function handleTokenKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    const { id, value } = e.target as HTMLInputElement;

    if (e.key === "Backspace") {
      if (Number.parseInt(id) > 0) {
        const prevItem = (Number.parseInt(id) - 1).toString();
        document.getElementById(prevItem)?.focus();
      }
    }

    if (!value) {
      e.preventDefault();
      return;
    }

    const nextItem = Number.parseInt(id) + 1;
    document.getElementById(nextItem.toString())?.focus();
  }

  function handleTokenPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("Text").trim();

    if (pasteData.length > 4) {
    }

    for (let i = 0; i < 4; i++) {
      const character = pasteData[i];
      const elementId = i.toString();
      const elementNode = document.getElementById(
        elementId
      ) as HTMLInputElement;

      if (elementNode !== null) {
        elementNode.value = character;
      }
    }

    document.getElementById("3")?.focus();
  }

  function handleSubmitToken(e: MouseEvent<HTMLButtonElement>) {
    let token = [];

    for (let i = 0; i <= 3; i++) {
      const element = document.getElementById(i.toString()) as HTMLInputElement;

      if (element.value === "") {
        setHelperText("O token está  incompleto, falta um dos campos.");
        return;
      }

      token.push(element.value);
    }

    //to use in the backend
    localStorage.setItem("tokenValidated", "true");
    router.push("/signup/password");
  }

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={2}
        title="Token"
        icon={<i className="bi bi-asterisk"></i>}
        progress={25}
        backBtn={true}
      />

      <main>
        <Container>
          <Grid container justifyContent={"center"}>
            <StepperDesktop activeStep={2} />
            <Grid
              container
              item
              marginTop={"32px"}
              justifyContent={"space-between"}
              height={"auto"}
              sx={{
                height: { xs: "74vh", md: "auto" },
                backgroundColor: { xs: "transparent", md: "#FFFFFF" },
                padding: { xs: "0px", md: "24px" },
                marginBottom: { xs: "0px", md: "80px" },
                borderRadius: { xs: "0px", md: "24px" },
                boxShadow: {
                  xs: "transparent",
                  md: "0px 8px 24px -2px rgba(0, 0, 0, 0.15), 0px 2px 4px -1px rgba(0, 0, 0, 0.20)",
                },
              }}
              xs={12}
              md={7}
              lg={6}
            >
              <Grid container item gap={"40px"} alignSelf={"flex-start"}>
                <Grid container item gap={"8px"} flexDirection={"column"}>
                  <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      color="primary"
                      aria-label="fingerprint"
                      onClick={() => router.back()}
                    >
                      <i className="bi bi-arrow-left"></i>
                    </IconButton>
                  </Grid>
                  <Grid item display={{ xs: "none", md: "flex" }}>
                    <Typography variant="displaySmall">
                      Chegou a hora do Token!
                    </Typography>
                  </Grid>
                  <Grid item display={{ xs: "flex", md: "none" }}>
                    <Typography variant="headlineMedium">
                      Chegou a hora do Token!
                    </Typography>
                  </Grid>
                  <Typography variant="bodyMedium">
                    Enviamos um código token com 4 digítos por SMS para{" "}
                    {cellphone}, confirme o código abaixo.
                  </Typography>
                </Grid>
                <Grid container item gap={"8px"}>
                  <Grid
                    container
                    item
                    gap={{xs: "0px", md: "24px"}}
                    xs={12}
                    justifyContent={{xs: "space-between", md: "center"}}
                  >
                    <TokenInput
                      id="0"
                      handleKeyUp={handleTokenKeyUp}
                      handlePaste={handleTokenPaste}
                      error={helperText !== "" ? true : false}
                    />
                    <TokenInput
                      id="1"
                      handleKeyUp={handleTokenKeyUp}
                      handlePaste={handleTokenPaste}
                      error={helperText !== "" ? true : false}
                    />
                    <TokenInput
                      id="2"
                      handleKeyUp={handleTokenKeyUp}
                      handlePaste={handleTokenPaste}
                      error={helperText !== "" ? true : false}
                    />
                    <TokenInput
                      id="3"
                      handleKeyUp={handleTokenKeyUp}
                      handlePaste={handleTokenPaste}
                      error={helperText !== "" ? true : false}
                    />
                  </Grid>
                  {helperText && (
                    <Grid item textAlign={"center"} xs>
                      <Typography variant="bodySmall" sx={{ color: "#d32f2f" }}>
                        {helperText}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
                <Grid
                  container
                  item
                  justifyContent={"center"}
                  gap={"24px"}
                  alignSelf={"center"}
                >
                  <Grid
                    container
                    item
                    gap={"4px"}
                    flexDirection={"column"}
                    textAlign={"center"}
                  >
                    <Grid item>
                      <Typography variant="bodySmall">
                        Se você não recebeu, pode solicitar outro código em
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="titleSmall"
                        id="timer"
                        textAlign={"center"}
                      >
                        {timer}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="text"
                      color="primary"
                      size="medium"
                      disabled={resendToken}
                      onClick={handleResendToken}
                    >
                      Preciso de outro código
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                alignSelf={"flex-end"}
                sx={{
                  paddingTop: { xs: "40px", md: "72px" },
                  paddingBottom: { xs: "40px", md: "0px" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={true}
                  onClick={handleSubmitToken}
                >
                  Avançar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={openSnack}
          autoHideDuration={4000}
          onClose={handleSnackClose}
        >
          <Alert severity="success" onClose={handleSnackClose}>
            Enviamos outro código para o seu email.
          </Alert>
        </Snackbar>
      </main>
      <WhatsAppFab bottom={{ xs: "156px", md: "48px" }} />
    </Container>
  );
}
