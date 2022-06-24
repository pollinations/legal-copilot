import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import Logo from '../assets/LegalCopilot.png'

const Footer = () => {

    return <TextContainer>
        <Typography variant="h2">
            legalese <span>translation</span> using AI.
        </Typography>
        <Typography variant='h6'>
            Made with <span>Pollinations</span>
        </Typography>
    </TextContainer>
}

const TextContainer = styled.div`
text-align: center;
font-weight: bold;
h2 {
    span {
        color: #d45028 !important;
}
}

`




  export default Footer