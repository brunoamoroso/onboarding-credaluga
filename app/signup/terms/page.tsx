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
import { useRouter } from "next/navigation";
import WhatsAppFab from "@/app/components/onboarding/whatsAppFab";
import StepperDesktop from "@/app/components/onboarding/StepperDesktop";

const metadata: Metadata = {
  title: "Aceite de Termos",
};

export default function Auth() {
  const router = useRouter();
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar
        step={4}
        title="Aceite de Termos"
        icon={<i className="bi bi-file-earmark-text-fill"></i>}
        progress={75}
        backBtn={false}
      />

      <main>
        <Container>
          <StepperDesktop activeStep={4} />
          <Grid
            container
            justifyContent={"center"}
            marginTop={"48px"}
            paddingBottom={"80px"}
          >
            <Grid
              container
              item
              paddingTop={"48px"}
              justifyContent={"space-between"}
              height={"auto"}
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
              md={8}
              lg={7}
            >
              <Grid container item gap={"8px"} flexDirection={"column"}>
                <Grid item sx={{ display: { xs: "none", md: "none" } }}>
                  <IconButton
                    color="primary"
                    aria-label="fingerprint"
                    onClick={() => router.back()}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </IconButton>
                </Grid>
                <Typography variant="displaySmall" component={"h1"}>
                  Leia e aceite os termos
                </Typography>
                <Typography variant="bodyMedium">
                  Última etapa! Aqui é onde você pode revisar nossos termos e
                  condições. Por favor, leia com atenção e, quando estiver
                  pronto, vá até o final e aperte em &quot;Avançar&quot; para finalizar.
                </Typography>
              </Grid>
              <Grid
                container
                item
                alignSelf={"flex-start"}
                flexDirection={"column"}
                sx={{ paddingTop: "32px" }}
              >
                <Typography variant="headlineLarge" component={"h2"}>
                  Non galisum molestiae et reiciendis obcaecati.
                </Typography>
                <Typography
                  variant="headlineMedium"
                  className="headlineMedium_MarginBlock"
                  component={"h3"}
                >
                  Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="bodyMedium" component={"p"}>
                  Qui enim consequatur non voluptatem officia non voluptatum
                  accusantium id dolores optio ut corporis corrupti et neque
                  autem? Ea consequatur nostrum non accusantium delectus ut
                  deleniti ipsa eos quasi repellendus 33 necessitatibus
                  obcaecati sed velit unde et suscipit doloribus.
                </Typography>
                <Typography
                  variant="headlineSmall"
                  className="headlineSmall_MarginBlock"
                  component={"h4"}
                >
                  Sit ipsum consequatur vel vero fugit?
                </Typography>
                <Typography variant="bodyMedium" component={"p"}>
                  Sit enim corrupti sit quidem facere ut corporis asperiores ut
                  quae architecto eos dolorum quia rem repudiandae voluptatem
                  sed maxime dolorem. Et ullam voluptate non iure modi hic
                  labore odit sed quos dignissimos! Qui voluptatum consequatur
                  vel quia omnis non vero nemo in vero neque in quod officiis
                  est commodi blanditiis. Est itaque beatae id corporis
                  voluptatem ex animi dolores sit distinctio asperiores eum
                  quidem repellat At facere laudantium nam distinctio voluptas.
                </Typography>
                <Typography variant="bodyMedium" component={"p"}>
                  Sit enim corrupti sit quidem facere ut corporis asperiores ut
                  quae architecto eos dolorum quia rem repudiandae voluptatem
                  sed maxime dolorem. Et ullam voluptate non iure modi hic
                  labore odit sed quos dignissimos! Qui voluptatum consequatur
                  vel quia omnis non vero nemo in vero neque in quod officiis
                  est commodi blanditiis. Est itaque beatae id corporis
                  voluptatem ex animi dolores sit distinctio asperiores eum
                  quidem repellat At facere laudantium nam distinctio voluptas.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                alignSelf={"flex-end"}
                sx={{
                  paddingBottom: { xs: "40px", md: "0px" },
                  marginTop: { xs: "40px", md: "40px" },
                }}
              >
                <Link href={"/signup/token"}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth={true}
                  >
                    Declaro que li e aceitos os termos
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
      <WhatsAppFab bottom={{ xs: "156px", md: "48px" }} />
    </Container>
  );
}
