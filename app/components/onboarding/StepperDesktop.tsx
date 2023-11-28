"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#2C73B5",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#2C73B5",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    width: "70%",
    marginLeft: "15%",
    border: 0,
    backgroundColor: "#BDC7D4",
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: "#CCE5FF",
  zIndex: 1,
  color: '#87919E',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    color: "#004575",
    backgroundColor: "#CCE5FF",
    outline: "3px solid #0080B8",
    outlineOffset: "4px",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#0080B8",
    color: "#FFF",
  }),
}));

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <i className="bi bi-file-earmark-person-fill"></i>,
    2: <i className="bi bi-ui-radios"></i>,
    3: <i className="bi bi-asterisk"></i>,
    4: <i className="bi bi-shield-lock-fill"></i>,
    5: <i className="bi bi-file-earmark-text-fill"></i>

  };

  return (
    <CustomStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? (
        <i className="bi bi-check-circle-fill"></i>
      ) : (
        icons[String(props.icon)]
      )}
      
    </CustomStepIconRoot>
  );
}

const steps = ['Autenticação', 'Pesquisa de Perfil', 'Token', 'Definir Senha', 'Aceite dos Termos'];

export default function StepperDesktop({activeStep}: {activeStep: number}) {
  return (
    <Stack sx={{ width: '100%', marginTop: "80px", display: {xs: "none", md: "flex"} }} spacing={4}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<CustomConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}