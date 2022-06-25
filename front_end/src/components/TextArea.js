import { Button, CircularProgress, TextField, Typography } from "@mui/material"

const TextArea = props => {




    return <>
        <Typography variant='h4' children={props.title}/>
        <TextField
            id={props.title}
            autoFocus
            multiline
            variant='filled'
            rows={15}
            fullWidth
            disabled={props.loading}
            {...props.input}/>

          <Button 
          variant='outlined' 
          endIcon={props.loading && <CircularProgress size={20} />}
          children={!props.loading ? 'translate' : 'decoding' }
          disabled={props.loading}
          onClick={props.onSubmit}/>
    </>
}

export default TextArea