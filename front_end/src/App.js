import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const API_URL = "https://legal-worker.pollinations.ai/legal"


function App() {

  const [original_text, setOriginalText] = useState('')
  const [translated_text, setTranslatedText] = useState('')

  async function onSubmit() {
    try {
      const response = await fetch(
          API_URL, { 
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "original": original_text
          })
        }
      );
      const data = await response.json();
      setTranslatedText(data?.simple)
      // console.log("json response", data)
      return data
    } catch (error) {
      // console.log("fetch error", error)
      return error
    }
  }


  return (
    <Container>
      <Grid>
          
        <GridItem>
          <Typography variant='h3' children='Legalese'/>
          <TextField
            id="legalese-text"
            multiline
            variant='filled'
            rows={15}
            fullWidth
            onChange={(e) => setOriginalText(e.target.value)}
          />
          <Button 
            children='translate' 
            variant='outlined' 
            style={{marginTop: '1em'}} 
            onClick={onSubmit}/>
        </GridItem>
        <GridItem>
          <Typography variant='h3' children='Real life language'/>
          <TextField
            id="translated-text"
            multiline
            variant='filled'
            rows={15}
            fullWidth
            value={translated_text}
            disabled
          />
        </GridItem>         
      </Grid>
    </Container>
  );
}

const GridItem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Container = styled.div`
width: 100%;
min-height: 100vh;

display: flex;
justify-content: center;
`
const Grid = styled.div`
width: 100%;
padding: 0 3em;
margin-top: 5em;
display: grid;

grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 3em;
`


export default App;
