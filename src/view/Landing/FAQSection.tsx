import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, SxProps, Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface FAQSectionProps {
  className?: string;
  sx?: SxProps<Theme>;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: readonly FAQItem[] = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: 5,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  }
] as const;

const FAQSection: React.FC<FAQSectionProps> = ({ className, sx }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean): void => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2 }, ...sx }} className={className}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{ textAlign: 'center', color: 'white', mb: { xs: 2 } }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {faqItems.map((item) => (
          <Accordion
            key={item.id}
            expanded={expanded === `panel${item.id}`}
            onChange={handleChange(`panel${item.id}`)}
            sx={{
              bgcolor: '#331E22CC',
              borderRadius: '25px',
              boxShadow: 'none',
              color: 'white',
              '&::before': { display: 'none' } // Removes default Material-UI Accordion border
            }}
          >
            <AccordionSummary
              expandIcon={
                <IconButton aria-label="Expand question" sx={{ color: 'white' }}>
                  <AddIcon />
                </IconButton>
              }
              aria-controls={`panel${item.id}a-content`}
              id={`panel${item.id}a-header`}
              sx={{
                bgcolor: 'transparent',
                paddingLeft: '16px',
                paddingRight: '16px',
                minHeight: '48px',
                '& .MuiAccordionSummary-content': {
                  marginTop: '8px',
                  marginBottom: '8px'
                }
              }}
            >
              <Typography variant="subtitle1">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
              <Typography variant="body2">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>

        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;