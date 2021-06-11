import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import Box from '@material-ui/core/Box';

const ResponseView = ({ response }) => {
    return (
        <Box pt={2}>
            {response ? (
                    <>
                    <CodeMirror
                    value={JSON.stringify(response.data)}
                    options={{
                        theme: 'base16-light',
                        lineNumbers: true
                    }}
                />
                </>): ""}
        </Box>
    )
}

export default ResponseView