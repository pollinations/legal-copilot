import { TextField, Typography } from "@mui/material"

const EmptyItem = props => <>
    <Typography variant='h4' children={props.title} />
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

export default EmptyItem