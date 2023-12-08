import { Fab } from "@mui/material";
import Link from "next/link";

interface IWhatsAppFab{
    bottom?: {
        xs?: string,
        md?: string,
    },
    right?: {
        xs?: string,
        md?: string,
    },
}

export default function WhatsAppFab({bottom: {xs: xsBottom = "112px", md: mdBottom = "56px"} = {}, right: {xs: xsRight = "16px", md: mdRight = "48px"} = {}}: IWhatsAppFab) {
  return (
    <Link href={"https://wa.me/+553131914866"} target="_blank">
      <Fab
        variant="whatsapp"
        sx={{
          bottom: {xs: xsBottom, md: mdBottom},
          right: {xs: xsRight, md: mdRight},
        }}
      >
        <i className="bi bi-whatsapp"></i>
        Precisa de Ajuda?
      </Fab>
    </Link>
  );
}
