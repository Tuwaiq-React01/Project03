import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const MainData = ({ method, mainUtils, host }) => {
    return (
        <Box display="flex" justifyContent="space-between">
        <Box width="8em">
        <FormControl  fullWidth variant="outlined">
            <InputLabel>Method</InputLabel>
            <Select
                value={method}
                onChange={mainUtils.onMethodChange}
                label="Method"
            >
                <MenuItem value={"GET"}>GET</MenuItem>
                <MenuItem value={"POST"}>POST</MenuItem>
                <MenuItem value={"DELETE"}>DELETE</MenuItem>
                <MenuItem value={"PUT"}>PUT</MenuItem>
                <MenuItem value={"PATCH"}>PATCH</MenuItem>
            </Select>
        </FormControl>
        </Box>
        <Box width="45em">
            <FormControl fullWidth>
                <TextField label="Host" variant="outlined" onChange={mainUtils.onHostChange} value={host} />
            </FormControl>
        </Box>
        <Button onClick={mainUtils.submit} variant="contained" color="primary" disableElevation>
            Send
        </Button>
    </Box>
    )
}

export default MainData