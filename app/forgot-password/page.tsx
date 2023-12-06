"use client";

import {
    Alert,
  AppBar,
  Button,
  Container,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function ForgotPassword() {
  const [helperText, setHelperText] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const router = useRouter();

  function handleSnackClose(e: SyntheticEvent | Event, reason?: string) {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  }

  function handleAction(){
    setOpenSnack(true);
  }
  return (
    <>
      <AppBar position="static" color="default" sx={{ padding: "16px 0px" }}>
        <Container disableGutters={true} maxWidth={false}>
          <Grid container flexDirection={"column"} gap={"32px"}>
            <Grid
              item
              sx={{
                paddingLeft: {
                  xs: "16px",
                  sm: "16px",
                  md: "56px",
                  lg: "56px",
                  xl: "56px",
                },
              }}
              alignItems={"center"}
            >
              <Image
                src={"/credaluga-logo.svg"}
                height={32}
                width={186}
                alt="CredAluga Logo"
                style={{ display: "flex" }}
              />
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <main>
        <Container>
          <Grid
            container
            item
            sx={{ height: { md: "87vh" } }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid
              container
              item
              sx={{
                marginTop: "48px",
                flexDirection: "column",
                gap: "8px",
                height: { xs: "73vh", md: "auto" },
                backgroundColor: { xs: "transparent", md: "#FFFFFF" },
                padding: { xs: "0px", md: "24px" },
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
                <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      color="primary"
                      aria-label="fingerprint"
                      onClick={() => router.back()}
                    >
                      <i className="bi bi-arrow-left"></i>
                    </IconButton>
                  </Grid>
              <Grid
                container
                item
                flexDirection={"column"}
                flexWrap={"nowrap"}
                flexGrow={"1"}
                gap={"40px"}
              >
                <Grid
                  container
                  item
                  gap={"8px"}
                  flexDirection={"column"}
                  alignSelf={"flex-start"}
                >
                  <Typography variant="displaySmall">
                    Recuperar minha senha
                  </Typography>
                  <Typography variant="bodyMedium">
                    Digite seu email para a gente te enviar um email de
                    recuperação de senha. Entendemos que isso acontece e vamos
                    te ajudar.
                  </Typography>
                </Grid>

                <Grid container item xs={12} flexGrow={"2"}>
                  <form
                    noValidate
                    action={handleAction}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <Grid
                      container
                      item
                      flexGrow={"1"}
                      flexWrap={"nowrap"}
                      flexDirection={"column"}
                      alignItems={"space-between"}
                    >
                      <Grid item>
                        <TextField
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          label="Email"
                          fullWidth={true}
                          required={true}
                          helperText={helperText}
                          error={helperText !== "" ? true : false}
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xs={12}
                        sx={{
                          marginTop: { xs: "0px", md: "40px" },
                          marginBottom: { xs: "40px", md: "0px" },
                        }}
                        alignContent={"end"}
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          size="large"
                          fullWidth={true}
                        >
                          Recuperar senha
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={openSnack}
          autoHideDuration={4000}
          onClose={handleSnackClose}
        >
          <Alert severity="success" onClose={handleSnackClose}>
            Enviamos um email para você recuperar a senha.
          </Alert>
        </Snackbar>
        </Container>
      </main>
    </>
  );
}
