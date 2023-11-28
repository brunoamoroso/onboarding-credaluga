"use client";

import Navbar from "@/app/components/onboarding/navbar";
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { useRouter } from "next/navigation";

const metadata: Metadata = {
  title: "Autenticação",
};

export default function Auth() {
  const router = useRouter();
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={3}
        title="Dados Pessoais"
        icon={<i className="bi bi-person-circle"></i>}
        progress={50}
        backBtn={true}
      />

      <main>
        <Container sx={{ height: "100vh" }}>
          <Grid container justifyContent={"center"}>
            <StepperDesktop activeStep={2} />
            <Grid
              container
              item
              marginTop={"48px"}
              justifyContent={"space-between"}
              sx={{
                height: { xs: "90vh", md: "auto" },
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
              <Grid container item gap={"40px"} alignSelf={"flex-start"}>
                <Grid container item gap={"8px"}>
                  <Grid item sx={{ display: { xs: "none", md: "flex" } }}>
                    <IconButton
                      color="primary"
                      aria-label="fingerprint"
                      onClick={() => router.back()}
                    >
                      <i className="bi bi-arrow-left"></i>
                    </IconButton>
                  </Grid>
                  <Typography variant="displaySmall">
                    Seus dados na nossa plataforma
                  </Typography>
                  <Typography variant="bodyMedium">
                    Sabemos que já te identificamos, mas precisamos que você
                    preencha seus dados aqui para salvarmos na nossa plataforma.
                  </Typography>
                </Grid>

                <Grid container item gap={"24px"} xs={12}>
                  <TextField
                    variant="filled"
                    label="Nome Completo"
                    fullWidth={true}
                  />
                  <TextField
                    variant="filled"
                    label="Data de Nascimento"
                    fullWidth={true}
                  />
                  <TextField variant="filled" label="CEP" fullWidth={true} />
                </Grid>
              </Grid>
              <Grid item xs={12} alignSelf={"flex-end"}  sx={{ paddingTop: {xs: "0px", md: "40px"}, paddingBottom: { xs: "40px", md: "0px" } }}>
                <Link href={"/signup/token"}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={true}
                  >
                    Avançar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Container>
  );
}
