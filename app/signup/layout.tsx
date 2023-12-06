import Navbar from "../components/onboarding/navbar";
import { Container } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container disableGutters={true} sx={{backgroundColor: "#EBF2F7"}} maxWidth={false}>
      {children}
    </Container>
  );
}
