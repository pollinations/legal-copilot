import { useState } from 'react';
import Footer from './components/Footer';
import { NDA, NDA_TRANSLATED } from './assets/texts.js'
import fetchTranslation from './network';

import Header from './components/Header';
import EmptyItem from './components/EmptyItem';
import TextArea from './components/TextArea';
import Layout from './components/Layout';

function App() {

  const [loading, setLoading] = useState(false)
  const [original_text, setOriginalText] = useState(NDA)
  const [translated_text, setTranslatedText] = useState(NDA_TRANSLATED)

  async function onSubmit() {
    setLoading(true)
    const response = await fetchTranslation(original_text)
    setTranslatedText(response?.simple)
    setLoading(false)
  }


  return (     
    <Layout> 

      <Header/>

      <TextArea input={{
        value: original_text,
        onChange: (e) => setOriginalText(e.target.value),
      }} 
      loading={loading}
      onSubmit={onSubmit}
      title='legal nonsense:'/>

      <EmptyItem title='what does it mean:' value={translated_text}/>
        
      <Footer/>

    </Layout>
  );
}
export default App;
