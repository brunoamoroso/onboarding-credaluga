"use client";

import Navbar from "@/app/components/onboarding/navbar";
import {
  Container,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  IconButton,
  Box,
} from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import WhatsAppFab from "@/app/components/onboarding/whatsAppFab";

const metadata: Metadata = {
  title: "Pesquisa de Autenticação",
};

export default function ProfileResearch() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | false>("item-0");

  const handleChange =
    (item: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? item : false);
    };

  function handleAction(formData: any) {
    let allClear: boolean[] = [];

    for (let i = 0; i < itemsAccordion.length; i++) {
      if(!formData.has(`item-${i}`)){
        document.getElementById(`helper-${i}`)!.innerText = "Este item é obrigatório";
        allClear.push(false);
      }else{
        document.getElementById(`helper-${i}`)!.innerText = "";
        allClear.push(true);
      }
    }

    if(!allClear.every((item) => item === true)){
      return;
    }

    router.push('/signup/token');
  }

  const itemsAccordion = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
  ];

  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={2}
        title="Pesquisa de Perfil"
        icon={<i className="bi bi-ui-radios"></i>}
        progress={25}
        backBtn={true}
      />

      <main>
        <Container sx={{ paddingBottom: { xs: "40px", md: "80px" } }}>
          <Grid container justifyContent={"center"}>
            <StepperDesktop activeStep={1} />
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
              <Grid container item gap={"40px"} flexDirection={"column"}>
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
                  <Typography variant="displaySmall">
                    Queremos te conhecer um pouco
                  </Typography>
                  <Typography variant="bodyMedium">
                    A gente gosta de entender um pouco de como é o perfil das
                    pessoas que são nossas parceiras. Responda as perguntas
                    abaixo rapidinho para ajudar a gente
                  </Typography>
                </Grid>

                <form
                  action={handleAction}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexGrow: "1",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    container
                    item
                    xs={12}
                    paddingBottom={"40px"}
                    flexDirection={"column"}
                  >
                    {itemsAccordion.map((item, i) => (
                      <Accordion
                        key={`item-${i}`}
                        sx={{ width: "100%" }}
                        expanded={expanded === `item-${i}`}
                        onChange={handleChange(`item-${i}`)}
                      >
                        <AccordionSummary
                          expandIcon={<i className="bi bi-caret-down-fill"></i>}
                        >
                          <Grid container item flexDirection={"column"}>
                            <Grid item>
                              {item.title}
                            </Grid>
                            <Grid item sx={{color: "#d32f2f"}}>
                              <Typography variant="bodySmall" id={`helper-${i}`}></Typography>
                            </Grid>
                          </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                          <FormControl>
                            <RadioGroup name={`item-${i}`}>
                              <Grid
                                container
                                item
                                flexDirection={"row"}
                                gap={"64px"}
                              >
                                <FormControlLabel
                                  value="yes"
                                  label="Sim"
                                  control={<Radio />}
                                ></FormControlLabel>
                                <FormControlLabel
                                  value="no"
                                  label="Não"
                                  control={<Radio />}
                                ></FormControlLabel>
                              </Grid>
                            </RadioGroup>
                          </FormControl>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems={"end"}
                    sx={{ paddingBottom: { xs: "40px", md: "0px" } }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth={true}
                      type="submit"
                    >
                      Avançar
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <WhatsAppFab bottom={{xs: "156px", md: "48px"}}/>
      </main>
    </Container>
  );
}