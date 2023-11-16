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
      <Navbar step={1} title="Autenticação" icon={<i className="bi bi-person-badge-fill"></i>} progress={0} />

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
                  Segurança em primeiro lugar!
                </Typography>
                <Typography variant="bodyMedium">
                  Precisamos identificar quem você é para a sua segurança e a
                  nossa também. Preencha os dados a seguir e deixa o resto com a
                  gente.
                </Typography>
              </Grid>

              <Grid container item gap={"24px"} xs={12}>
                <TextField
                  variant="filled"
                  label="Primeiros 4 digítos do CPF"
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
              <Link href={"/signup/profile-research"}>
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
