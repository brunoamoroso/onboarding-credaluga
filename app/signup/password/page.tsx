"use client";

import Navbar from "@/app/components/onboarding/navbar";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Metadata } from "next";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import PasswordProgressBar from "@/app/components/onboarding/PasswordProgressBar";
import { passwordCheck } from "@/app/utils/passwordCheck";
import WhatsAppFab from "@/app/components/onboarding/whatsAppFab";

const metadata: Metadata = {
  title: "Senha",
};

export default function Password() {
  const [validations, setValidations] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    minLength: false,
    hasSymbol: false,
  });

  const [helperPassword, setHelperPassword] = useState("");
  const [helperConfirmPassword, setHelperConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const router = useRouter();

  function handlePasswordValidation(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;
    const passValidations = passwordCheck(password);
    setValidations(passValidations);

    if(!Object.values(passValidations).every((check) => check === true)){
      setPasswordValid(false);
      return;
    }


    setPasswordValid(true);
    setHelperPassword("");
  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPasswordValid(false);
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const password = inputPassword.value;

    const inputConfirmPassword = e.target as HTMLInputElement;
    const confirmPassword = inputConfirmPassword.value;

    if (password !== confirmPassword) {
      setHelperConfirmPassword("As senhas não são iguais");
      return;
    }

    if (helperConfirmPassword !== "") setHelperConfirmPassword("");
    setConfirmPasswordValid(true);
  }

  function handleSubmit(formData: any) {
    const inputPassword = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const inputConfirmPassword = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;

    const valueInputPassword = inputPassword.value;
    const confirmPassword = inputConfirmPassword.value;

    if (valueInputPassword === "") {
      setHelperPassword("Este campo é obrigatório");
      return;
    }

    if (confirmPassword === "") {
      setHelperConfirmPassword("Este campo é obrigatório");
      return;
    }

    if((helperPassword !== "") || (helperConfirmPassword !== "")){
      return;
    }

    const password = formData.get("password");
    router.push("/signup/terms");
  }

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={4}
        title="Definir Senha"
        icon={<i className="bi bi-person-circle"></i>}
        progress={50}
        backBtn={true}
      />

      <main>
        <Container>
          <Grid container justifyContent={"center"}>
            <StepperDesktop activeStep={3} />
            <Grid
              container
              item
              marginTop={"48px"}
              sx={{
                height: { xs: "65vh", md: "auto" },
                backgroundColor: { xs: "transparent", md: "#FFFFFF" },
                padding: { xs: "0px", md: "24px" },
                borderRadius: { xs: "0px", md: "24px" },
                marginBottom: "80px",
                boxShadow: {
                  xs: "transparent",
                  md: "0px 8px 24px -2px rgba(0, 0, 0, 0.15), 0px 2px 4px -1px rgba(0, 0, 0, 0.20)",
                },
              }}
              xs={12}
              md={7}
              lg={6}
            >
              <Grid container item gap={"40px"} flexDirection={"column"}>
                <Grid
                  container
                  item
                  gap={"8px"}
                  flexDirection={"column"}
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
                  <Typography variant="displaySmall" component={"h1"}>
                    Defina sua senha
                  </Typography>
                  <Typography variant="bodyMedium" component={"p"}>
                    Defina uma senha para acessar a nossa plataforma. Siga a
                    nossa política de segurança para ter um senha forte e
                    segura.
                  </Typography>
                </Grid>

                <form
                  noValidate
                  style={{ width: "100%", display:"flex", flexGrow: "2", flexDirection: "column" }}
                  action={handleSubmit}
                >
                  <Grid container item  flexGrow={"3"} height={"100%"} flexDirection={"column"} flexWrap={"nowrap"}>
                    <Grid container item gap={"24px"} xs={12} flexGrow={"1"}>
                      <Grid container item gap={"8px"}>
                        <TextField
                          id="password"
                          name="password"
                          variant="filled"
                          label="Senha"
                          fullWidth={true}
                          required={true}
                          helperText={helperPassword}
                          onChange={handlePasswordValidation}
                          error={helperPassword !== "" ? true : false}
                          InputProps={{
                            endAdornment: passwordValid ? (
                              <InputAdornment
                                position="end"
                                sx={{ color: "#0A9652" }}
                              >
                                <i className="bi bi-check-circle-fill"></i>
                              </InputAdornment>
                            ) : (
                              ""
                            ),
                          }}
                        />
                        <PasswordProgressBar validations={validations} />
                      </Grid>

                      <TextField
                        id="confirmPassword"
                        variant="filled"
                        label="Confirmação de Senha"
                        fullWidth={true}
                        required={true}
                        helperText={helperConfirmPassword}
                        error={helperConfirmPassword !== "" ? true : false}
                        onChange={handleConfirmPassword}
                        InputProps={{
                          endAdornment: confirmPasswordValid ? (
                            <InputAdornment
                              position="end"
                              sx={{ color: "#0A9652" }}
                            >
                              <i className="bi bi-check-circle-fill"></i>
                            </InputAdornment>
                          ) : (
                            ""
                          ),
                        }}
                      />
                    </Grid>
                    <Grid
                    container
                      item
                      xs={12}
                      sx={{
                        paddingTop: { xs: "40px", md: "40px" },
                        paddingBottom: { xs: "0px", md: "0px" },
                      }}
                      
                      alignItems={"end"}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth={true}
                      >
                        Avançar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <WhatsAppFab bottom={{xs: "180px", md: "48px"}}/>
      </main>
    </Container>
  );
}
