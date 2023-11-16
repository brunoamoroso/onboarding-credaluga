import Navbar from "@/app/components/onboarding/navbar";
import { Container, Grid, Typography, Button, TextField } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Autenticação",
};

export default function Auth() {
  return (
    <Container disableGutters={true}>
      <Navbar
        step={3}
        title="Dados Pessoais"
        icon={<i className="bi bi-person-circle"></i>}
        progress={50}
      />

      <main>
        <Container sx={{ height: "100vh" }}>
          <Grid
            container
            item
            paddingTop={"48px"}
            justifyContent={"space-between"}
            height={"100vh"}
          >
            <Grid container item gap={"40px"} alignSelf={"flex-start"}>
              <Grid container item gap={"8px"}>
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
            <Grid item xs={12} alignSelf={"flex-end"} marginBottom={"40px"}>
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
        </Container>
      </main>
    </Container>
  );
}
