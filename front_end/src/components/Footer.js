import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

const Footer = () => <TextContainer>
    <Typography variant='h6'>
        Made with <a target="_blank" href='https://pollinations.ai'>Pollinations</a>
    </Typography>
</TextContainer>

const TextContainer = styled.div`
text-align: center;
margin-top: 1.5em;
`

export default Footer