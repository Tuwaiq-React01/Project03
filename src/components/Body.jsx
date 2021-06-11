import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/mode/javascript/javascript'
import Box from '@material-ui/core/Box';

const Body = ({ currentIndex, index, body, bodyUtils }) => {
    return (
        <Box pt={2} hidden={currentIndex !== index}>
            {
                currentIndex === index && (
                    <CodeMirror
                    value={body}
                    options={{
                        theme: 'base16-light',
                        lineNumbers: true
                    }}
                    onBeforeChange={(editor, data, value) => {
                        bodyUtils.updateBodyValue(value);
                    }}
                />
                )
            }

        </Box>
    )
}

export default Body
