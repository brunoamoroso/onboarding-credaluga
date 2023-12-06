"use client";

import {
  Grid,
  Container,
  AppBar,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });

export default function Login() {
  const [helperEmail, setHelperEmail] = useState("");
  const [helperPassword, setHelperPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleAction(formData: any) {
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;

    if (inputEmail.value === "") {
      setHelperEmail("Este campo é obrigatório");
      return;
    } else {
      setHelperEmail("");
    }

    if (inputPassword.value === "") {
      setHelperPassword("Este campo é obrigatório");
      return;
    } else {
      setHelperPassword("");
    }
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
        <Container
          sx={{
            height: { xs: "79vh", md: "auto" },
            marginTop: "48px",
            marginBottom: { xs: "80px", md: "48px" },
            justifyContent: "center",
            alignItems: { xs: "start", md: "center" },
            display: "flex",
          }}
        >
          <Grid
            container
            item
            sx={{
              height: "100%",
              backgroundColor: { xs: "transparent", md: "#FFFFFF" },
              borderRadius: { xs: "0px", md: "24px" },
              overflow: "hidden",
              boxShadow: {
                xs: "transparent",
                md: "0px 12px 16px 0px rgba(0, 0, 0, 0.15), 0px 4px 8px 0px rgba(0, 0, 0, 0.25)",
              },
            }}
            md={12}
            lg={10}
          >
            <Grid item sx={{ display: { xs: "none", md: "flex" } }} md>
              <Image
                src={"/login-cover.png"}
                height={721}
                width={487}
                alt="Casal olhando para o celular e cores azuis da CredAluga aos fundos"
              />
            </Grid>
            <Grid
              container
              item
              justifyContent={"space-between"}
              flexDirection={"column"}
              sx={{
                height: { xs: "100%", md: "auto" },
                padding: {
                  xs: "0px",
                  md: "48px 24px 24px 24px",
                  lg: "48px 48px 24px 24px",
                },
              }}
              md
            >
              <Grid
                container
                item
                gap={"40px"}
                height={"100%"}
                flexDirection={"column"}
              >
                <Grid container item gap={"8px"} flexDirection={"column"}>
                  <Grid item display={{xs: "none", md: "flex"}}>
                    <Typography variant="displaySmall">
                      Seja bem vindo(a) a CredAluga
                    </Typography>
                  </Grid>
                  {/* mobile */}
                  <Grid item display={{xs: "flex", md: "none"}}>
                    <Typography variant="headlineSmall">
                      Seja bem vindo(a) a CredAluga
                    </Typography>
                  </Grid>
                  <Typography variant="bodyMedium">
                    Preencha seus dados para acessar a plataforma que irá
                    facilitar seus aluguéis.
                  </Typography>
                </Grid>

                <form
                  action={handleAction}
                  style={{ width: "100%", display: "flex", flexGrow: "1" }}
                >
                  <Grid container item gap={"40px"}>
                    <Grid container item gap={"8px"} alignSelf={"flex-start"}>
                      <Grid container item gap={"24px"}>
                        <Grid item xs={12}>
                          <TextField
                            id="email"
                            name="email"
                            type="email"
                            variant="filled"
                            label="Email"
                            fullWidth={true}
                            helperText={helperEmail}
                            error={helperEmail !== "" ? true : false}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            variant="filled"
                            label="Senha"
                            fullWidth={true}
                            helperText={helperPassword}
                            error={helperPassword !== "" ? true : false}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="mostra ou esconde a sua senha"
                                    onClick={handleShowPassword}
                                  >
                                    {showPassword ? (
                                      <i className="bi bi-eye"></i>
                                    ) : (
                                      <i className="bi bi-eye-slash"></i>
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        xs
                        container
                        item
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Grid
                          item
                          sx={{
                            fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            fontWeight: "500",
                            letterSpacing: "0.048px",
                          }}
                        >
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Me manter conectado"
                            disableTypography={true}
                            name="keepConnected"
                          />
                        </Grid>
                        <Grid
                          item
                          sx={{
                            fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
                            fontSize: "0.75rem",
                            lineHeight: "1rem",
                            letterSpacing: "0.048px",
                            textDecoration: "underline",
                          }}
                        >
                          <Link href={"/forgot-password"}>
                            <span>Recuperar minha senha</span>
                          </Link>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      flexDirection={"column"}
                      justifyContent={"flex-end"}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth={true}
                      >
                        Entrar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Box
        sx={{
          position: "fixed",
          right: "0px",
          bottom: "96px",
          backgroundColor: "#FFF",
          paddingTop: "8px",
        }}
      >
        <Image
          src={"/invisible-recaptcha.png"}
          width={80}
          height={70}
          alt="captcha"
        />
      </Box>
    </>
  );
}
