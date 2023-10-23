import * as React from 'react';
import "./css/stepper.css"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Unam from '../assets/unam.png'
import Petco from '../assets/petco-logo.png'
import Liver from '../assets/liverpool.png'

const steps = [
  {
    label: "Bachelor's Degree 2017 - 2022",
    description: `Most Important Subjects: Objected-Oriented 
    Programming, Artificial Intelligence(IA), Data Bases, Secure 
    Data Networks, Data Structure and Algorithms (I and II), 
    Electronic Devices, introduction to Microcontrollers.`,
    image:Unam
  },
  {
    label: 'IT internship Petco México 2021 - 2022',
    description:`Involved in the development of web application for telephone 
      sales, as well as migration of SQL queries to mongo Db.
      Backend development with mongoDB, SQL and node, frontend development with VUE.`,
      image:Petco
  },
  {
    label: 'Analist in El Puerto de Liverpool 2022 - Current',
    description: `Web developer involved in the creation of a sales order update platform.
    Backend development with NodeJS, GCP ,Postgres, frontend development with ReactJS.`,
    image:Liver
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <img className='step-foto' src={step.image}></img>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Completed</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
