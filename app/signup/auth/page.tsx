"use client";

import Navbar from "@/app/components/onboarding/navbar";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Fab,
} from "@mui/material";
import { Metadata } from "next";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import cpfMask from "@/app/utils/cpfMask";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WhatsAppFab from "@/app/components/onboarding/whatsAppFab";

const metadata: Metadata = {
  title: "Autenticação",
};

export default function Auth() {
  const [cpfValue, setCPFValue] = useState("");
  const [helperText, setHelperText] = useState("");
  const router = useRouter();

  function handleKeyDownCPF(e: KeyboardEvent<HTMLInputElement>) {
    const isValid = /([\d]|Backspace)/g.test(e.key);
    if (!isValid) {
      e.preventDefault();
      return;
    }

    const inputCPF = e.target as HTMLInputElement;
    const cleanCPF = inputCPF.value.replace(".", "").replace("-", "");
    if (inputCPF.value.length >= 14 && e.key !== "Backspace") {
      e.preventDefault();
      setCPFValue(inputCPF.value.slice(0, 14));
      return;
    }
  }

  function handleChangeCPF(e: ChangeEvent<HTMLInputElement>) {
    setCPFValue(cpfMask(e.target.value));
  }

  function handleAction(formData: any) {
    const inputCPF = document.getElementById("cpf") as HTMLInputElement;
    if (inputCPF.value === "") {
      setHelperText("Este campo é obrigatório");
      return;
    }

    if (inputCPF.value.length < 13) {
      setHelperText("O CPF não está completo");
      return;
    }

    const cpf = formData.get("cpf");
    router.push("/signup/profile-research");
  }

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={1}
        title="Autenticação"
        icon={<i className="bi bi-person-badge-fill"></i>}
        progress={0}
        backBtn={false}
      />

      <main>
        <Container sx={{ height: "auto" }}>
          <Grid
            container
            item
            justifyContent={"center"}
            sx={{ paddingBottom: { xs: "0px", md: "40px" } }}
          >
            <StepperDesktop activeStep={0} />
            <Grid
              container
              item
              marginTop={"48px"}
              sx={{
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
              flexDirection={"column"}
            >
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
                    Segurança em primeiro lugar!
                  </Typography>
                  <Typography variant="bodyMedium">
                    Precisamos identificar quem você é para a sua segurança e a
                    nossa também. Preencha os dados a seguir e deixa o resto com
                    a gente.
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
                          id="cpf"
                          name="cpf"
                          variant="filled"
                          label="CPF"
                          fullWidth={true}
                          onKeyDown={handleKeyDownCPF}
                          onChange={handleChangeCPF}
                          value={cpfValue}
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
                          Avançar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
       <WhatsAppFab bottom={{xs: "156px", md: "48px"}}/>
    </Container>
  );
}
