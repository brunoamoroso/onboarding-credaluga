import Navbar from "@/app/components/onboarding/navbar";
import { Container, Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails, RadioGroup, Radio, FormControlLabel, FormControl } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Pesquisa de Autenticação",
};

export default function ProfileResearch() {
  return (
    <Container disableGutters={true}>
      <Navbar step={2} title="Pesquisa de Perfil" icon={<i className="bi bi-ui-radios"></i>} progress={25}/>

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
                  Queremos te conhecer um pouco
                </Typography>
                <Typography variant="bodyMedium">
                  A gente gosta de entender um pouco de como é o perfil das
                  pessoas que são nossas parceiras. Responda as perguntas abaixo
                  rapidinho para ajudar a gente
                </Typography>
              </Grid>

              <Grid container item xs={12} paddingBottom={"40px"}>
                <Accordion  sx={{width: "100%"}}>
                  <AccordionSummary expandIcon={<i className="bi bi-caret-down-fill"></i>}>Title</AccordionSummary>
                  <AccordionDetails>
                    <FormControl>
                      <RadioGroup>
                        <Grid container item flexDirection={"row"} gap={"64px"}>
                          <FormControlLabel value="yes" label="Sim" control={<Radio />}></FormControlLabel>
                          <FormControlLabel value="no" label="Não" control={<Radio />}></FormControlLabel>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                
                <Accordion  sx={{width: "100%"}}>
                  <AccordionSummary expandIcon={<i className="bi bi-caret-down-fill"></i>}>Title</AccordionSummary>
                  <AccordionDetails>
                    <FormControl>
                      <RadioGroup>
                        <Grid container item flexDirection={"row"} gap={"64px"}>
                          <FormControlLabel value="yes" label="Sim" control={<Radio />}></FormControlLabel>
                          <FormControlLabel value="no" label="Não" control={<Radio />}></FormControlLabel>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>

                <Accordion  sx={{width: "100%"}}>
                  <AccordionSummary expandIcon={<i className="bi bi-caret-down-fill"></i>}>Title</AccordionSummary>
                  <AccordionDetails>
                    <FormControl>
                      <RadioGroup>
                        <Grid container item flexDirection={"row"} gap={"64px"}>
                          <FormControlLabel value="yes" label="Sim" control={<Radio />}></FormControlLabel>
                          <FormControlLabel value="no" label="Não" control={<Radio />}></FormControlLabel>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>

              </Grid>
            </Grid>
            <Grid item xs={12} alignSelf={"flex-end"} paddingBottom={"40px"}>
              <Link href={"/signup/personal-data"}>
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
