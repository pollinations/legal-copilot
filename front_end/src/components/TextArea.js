import { Button, CircularProgress, TextField, Typography } from "@mui/material"

const TextArea = props => {

    const { input, loading, onSubmit, title } = props;

    return <>
        <Typography variant='h4' children={title}/>
        <TextField
        id={title}
        autoFocus
        multiline
        variant='filled'
        rows={15}
        fullWidth
        disabled={loading}
        {...input}/>

        <Button 
        variant='outlined' 
        endIcon={loading && <CircularProgress size={20} />}
        children={!loading ? 'translate' : 'decoding' }
        disabled={loading}
        onClick={onSubmit}/>
    </>
}

export default TextArea