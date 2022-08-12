import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

const Footer = () => <TextContainer>
    <Typography variant='h6'>
        Made with <a target="_blank" href='https://pollinations.ai' rel="noreferrer">
        Pollinations</a>
    </Typography>
    <Typography variant='h5'>
       <i> This is not legal advice. The Legal Translator is not a lawyer, always read your contracts thoroughly.</i>
    </Typography>
</TextContainer>

const TextContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
margin: 0 2em;

margin-top: 1.5em;
h6 {
    font-size: 1.2em;
    margin: 0.5em 0;
}
h5 {
    font-size: 0.9em;
    margin: 0.5em 0;
}
`

export default Footer