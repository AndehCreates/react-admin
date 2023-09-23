//faqs
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQItem = ({question, text}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const paragraphs = text.split('\n');

    return(
        <>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                {question}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {paragraphs.map((paragraph, index) => (
            <Typography key={index} component="p" style={{ marginBottom: '10px' }}>{paragraph}</Typography>
          ))}
            </AccordionDetails>
        </Accordion>
        </>
    )
}

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                important Question [static]
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lipsum Dalor \n test new line \n and another
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                important Question [static]
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lipsum Dalor
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                important Question [static]
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lipsum Dalor
                </Typography>
            </AccordionDetails>
        </Accordion>
        <FAQItem
            question="test question 1 [dynamic]"
            text={`Did you know that...? \n new text paragraph`}
        />
        <FAQItem
            question="test question 2 [dynamic]"
            text={`Did you know that...? \n line break here \n text text`}
        />
        <FAQItem
            question="test question 3 [dynamic]"
            text={`Did you know that...? \n new line \n and another`}
        />
        <FAQItem
            question="test question [dynamic]"
            text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec neque sed lacus rutrum tristique eget non nunc. Mauris egestas aliquet orci quis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel ultrices sapien.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec neque sed lacus rutrum tristique eget non nunc. Mauris egestas aliquet orci quis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel ultrices sapien.\n\ntext text`}
        />
        <FAQItem
            question="test question unformatted [dynamic]"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec neque sed lacus rutrum tristique eget non nunc. Mauris egestas aliquet orci quis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel ultrices sapien.\n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec neque sed lacus rutrum tristique eget non nunc. Mauris egestas aliquet orci quis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vel ultrices sapien.\n\n text text"
        />
    </Box>

}

export default FAQ;