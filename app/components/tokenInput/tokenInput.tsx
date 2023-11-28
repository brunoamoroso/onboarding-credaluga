"use client";

import { TextField } from "@mui/material";
import { KeyboardEvent, ClipboardEvent } from "react";

interface IToken {
  id: string;
  handleKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  error: boolean;
}

export default function TokenInput({ id, handleKeyUp, handlePaste, error }: IToken) {
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const isValid = /^([0-9]|Backspace|Meta|Ctrl|V)$/i.test(e.key);

    const { value, id } = e.target as HTMLInputElement;

    if (!isValid) {
      e.preventDefault();
    }
    if (value.length > 0 && e.key !== "Backspace") {
      e.preventDefault();
    }

    if(e.key.toLowerCase() === "v" && !(e.metaKey || e.ctrlKey)){
      e.preventDefault();
    }
  }

  return (
    <TextField
      id={id}
      type="text"
      variant="filled"
      sx={{ height: "80px", width: "64px" }}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onPaste={handlePaste}
      inputProps={{
        style: { padding: "4px 12px", fontSize: "3rem", textAlign: "center" },
      }}
      error={true}
    />
  );
}
