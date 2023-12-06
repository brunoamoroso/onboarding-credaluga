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
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ weight: ["500", "600", "700"], subsets: ["latin"] });

export default function Login() {
  const [helperEmail, setHelperEmail] = useState("");
  const [helperPassword, setHelperPassword] = useState("");
  const [helperCaptcha, setHelperCaptcha] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword(){
    setShowPassword(!showPassword);
  }

  function handleAction(formData: any) {
    const inputEmail = document.getElementById("email") as HTMLInputElement;
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const inputCaptcha = document.getElementById("captcha") as HTMLFormElement;

    if (inputEmail.value === "") {
      setHelperEmail("Este campo é obrigatório");
      return;
    } else {
      setHelperEmail("");
    }

    if (inputPassword.value === "") {
      setHelperPassword("Este campo é obrigatório");
      return;
    }else{
      setHelperPassword("");
    }

    if(!inputCaptcha.control.checked){
      setHelperCaptcha("Confirme que não é um robô");
      return;
    }else{
      setHelperCaptcha("");
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
            marginBottom: "80px",
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
                  <Typography variant="displaySmall">
                    Bem vindo(a) CredAluga
                  </Typography>
                  <Typography variant="bodyMedium">
                    Informe seu email e senha para acessar a plataforma da
                    CredAluga.
                  </Typography>
                </Grid>

                <form
                  action={handleAction}
                  style={{ width: "100%", display: "flex", flexGrow: "1" }}
                >
                  <Grid container item gap={"40px"}>
                    <Grid container item gap={"8px"}>
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
                                  <IconButton aria-label="mostra ou esconde a sua senha" onClick={handleShowPassword}>
                                    {showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>}
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
                      sx={{ backgroundColor: "#DBE3F0", padding: "8px" }}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Grid
                        xs
                        container
                        item
                        flexDirection={"column"}
                        sx={{
                          fontFamily: `${poppins.style.fontFamily}, Helvetica, Arial, sans-serif`,
                          fontSize: "0.75rem",
                          lineHeight: "1rem",
                          fontWeight: "500",
                          letterSpacing: "0.048px",
                        }}
                      >
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Não sou um robô"
                          disableTypography={true}
                          name="captcha"
                          id="captcha"
                        />
                        <Typography variant="bodySmall"  sx={{ color: "#d32f2f" }}>{helperCaptcha}</Typography>
                      </Grid>
                      <Grid item>
                        <Image
                          src={"/invisible-recaptcha.png"}
                          height={51}
                          width={70}
                          alt="recaptcha-image"
                        />
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
    </>
  );
}
