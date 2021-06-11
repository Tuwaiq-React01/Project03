import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import _Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Header from './Header'
import Body from './Body';


const Tabs = ({ hasBody, headersUtils, headers, bodyUtils, body }) => {
    const [tabState, setTabState] = useState(0)

    function onTabChange(event , value){
        setTabState(value)
    }

    return (
        <Box pt={2}>
            <Paper>
                <_Tabs
                    value={tabState}
                    onChange={onTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Headers" />
                    { hasBody && (
                        <Tab label="Body" />
                    ) }
                </_Tabs>
            </Paper>
            <Header headersUtils={headersUtils} headers={headers} currentIndex={tabState} index={0} />
            <Body body={body} bodyUtils={bodyUtils} currentIndex={tabState} index={1} />
        </Box>
    )
}

export default Tabs
