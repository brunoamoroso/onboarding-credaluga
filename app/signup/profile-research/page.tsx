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
  FormGroup,
  Checkbox,
} from "@mui/material";
import { Metadata } from "next";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
    let hasItem: string[] = [];

    for (const key of formData.keys()) {
      //get only the number of the item to check
      if (hasItem.find((item) => item === key[4]) === undefined) {
        hasItem.push(key[4]);
      }
    }

    //validation if all is filled
    for (let i = 0; i < itemsAccordion.length; i++) {
      //check if there's at least one answer in the items or if it needs to be answered yet
      if (hasItem.find((item) => item === i.toString()) === undefined) {
        document.getElementById(`helper-${i}`)!.innerText =
          "Este item é obrigatório";
        allClear.push(false);
      } else {
        document.getElementById(`helper-${i}`)!.innerText = "";
        allClear.push(true);
      }
    }

    if (!allClear.every((item) => item === true)) {
      return;
    }

    let dataObj: { [key: string]: any } = {};

    for (const pair of formData.entries()) {
      //split if this is multi item
      const splitted = pair[0].split("-");
      const key: string = splitted[0];

      //check if is an item with single or multi answer
      if (pair[0][5] === undefined) {
        //single
        dataObj[key] = pair[1];
      } else {
        //multi
        if (!(key in dataObj)) {
          dataObj[key] = [];
        }
        dataObj[key].push(splitted[1]);
      }
    }

    localStorage.setItem("profile-research", JSON.stringify(dataObj));
    router.push("/signup/token");
  }

  const itemsAccordion = [
    {
      title: "Com quem você vai morar?",
      type: "single",
      answers: [
        { item: "", value: "alone", label: "Sozinho" },
        { item: "", value: "family", label: "Família" },
        { item: "", value: "friends", label: "Amigos" },
      ],
    },
    {
      title: "Possui animais de estimação?",
      type: "single",
      answers: [
        { item: "", value: "yes", label: "Sim" },
        { item: "", value: "no", label: "Não" },
      ],
    },
    {
      title: "Por onde você pesquisou o imóvel?",
      type: "multi",
      answers: [
        { item: "item2", value: "websites_apps", label: "Sites/Aplicativos" },
        { item: "item2", value: "sign_ads", label: "Placa de Anúncio" },
        { item: "item2", value: "recommendation", label: "Indicação" },
        { item: "item2", value: "others", label: "Outros" },
      ],
    },
    {
      title: "Você realizou a visita no imóvel antes de alugá-lo?",
      type: "multi",
      answers: [
        { item: "item3", value: "virtually", label: "Virtualmente" },
        { item: "item3", value: "in_person", label: "Presencialmente" },
        {
          item: "item3",
          value: "no_visit",
          label: "Não, eu não realizei visita",
        },
      ],
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
              marginTop={"32px"}
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
                  <Grid item display={{ xs: "none", md: "flex" }}>
                    <Typography variant="displaySmall">
                      Vamos nos conhecer melhor!
                    </Typography>
                  </Grid>
                  {/* mobile */}
                  <Grid item display={{ xs: "flex", md: "none" }}>
                    <Typography variant="headlineMedium">
                      Vamos nos conhecer melhor!
                    </Typography>
                  </Grid>
                  <Typography variant="bodyMedium">
                    Aqui na CredAluga, valorizamos a individualidade. Responda
                    algumas perguntas rápidas para conhecer você melhor.
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
                            <Grid item>{item.title}</Grid>
                            <Grid item sx={{ color: "#d32f2f" }}>
                              <Typography
                                variant="bodySmall"
                                id={`helper-${i}`}
                              ></Typography>
                            </Grid>
                          </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                          {item.type === "single" && (
                            <FormControl>
                              <RadioGroup name={`item${i}`}>
                                <Grid container item gap={"24px"}>
                                  {item.answers.map((answer, i) => (
                                    <FormControlLabel
                                      key={`answer-${i}`}
                                      value={answer.value}
                                      label={answer.label}
                                      control={<Radio />}
                                    ></FormControlLabel>
                                  ))}
                                </Grid>
                              </RadioGroup>
                            </FormControl>
                          )}

                          {item.type === "multi" && (
                            <FormControl component={"fieldset"}>
                              <FormGroup>
                                <Grid container item gap={"24px"}>
                                  {item.answers.map((answer, i) => (
                                    <FormControlLabel
                                      key={`answer-${i}`}
                                      name={`${answer.item}-${answer.value}`}
                                      control={<Checkbox />}
                                      label={answer.label}
                                    />
                                  ))}
                                </Grid>
                              </FormGroup>
                            </FormControl>
                          )}
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
        <WhatsAppFab bottom={{ xs: "156px", md: "48px" }} />
      </main>
    </Container>
  );
}
