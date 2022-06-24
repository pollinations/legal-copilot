import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Footer from './components/Footer';
import { NDA, NDA_TRANSLATED } from './assets/texts.js'
import fetchTranslation from './network';

function App() {

  const [original_text, setOriginalText] = useState(NDA)
  const [translated_text, setTranslatedText] = useState(NDA_TRANSLATED)

  async function onSubmit() {
    const response = await fetchTranslation(original_text)
    setTranslatedText(response?.simple)
  }


  return (
    <>
    <Container>
      <Grid>
        <GridItem>
          <Typography variant='h4' children='your legal nonsense:'/>
          <TextField
            id="legalese-text"
            autoFocus
            multiline
            variant='filled'
            rows={15}
            fullWidth
            value={original_text}
            onChange={(e) => setOriginalText(e.target.value)}
          />
          <Button 
            children='translate' 
            variant='outlined' 
            style={{marginTop: '1em'}} 
            onClick={onSubmit}/>
        </GridItem>
        <GridItem>
          <EmptyItem title={<>what does it <i>actually</i> means:</>} value={translated_text}/>
        </GridItem>         
      </Grid>
      <Footer/>
    </Container>
  </>
  );
}

const EmptyItem = props => {

  return <>
    <Typography variant='h4' children={props.title}/>
      <TextField
        id="translated-text"
        multiline
        variant='filled'
        rows={15}
        fullWidth
        disabled
        {...props}
    />
  
  </>
}



const GridItem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`

const Container = styled.div`
max-width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const Grid = styled.div`
width: calc(100% - 6em);
padding: 0 3em;
//margin-top: 5em;
display: grid;

grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 3em;
`


export default App;
