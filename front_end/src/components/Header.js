import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"

const Header = () => <HeaderStyle>
    <Typography variant="h2">
        legalese <span>translation</span> using AI
    </Typography>
    <img src={require('../assets/LegalCopilot.png')} alt="LegalCopilot" />
</HeaderStyle>

const HeaderStyle = styled.div`
display: flex;
justify-content: space-between;
text-align: left;
padding: 0 1em;
margin-bottom: 1em;
img{
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
}
span {
    font-weight: bold;
}
`

export default Header