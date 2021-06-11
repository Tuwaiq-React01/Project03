import { useState, useEffect } from 'react'
import MainData from './MainData'
import Tabs from './Tabs'

const RequestFrom = ({ sendRequest }) => {
    const [hostState, setHostState] = useState("")
    const [methodState, setMethodState] = useState("")
    const [hasBodyState, setHasBodyState] = useState(false)
    const [headersState, setHeadersState] = useState([])
    const [bodyState, setBodyState] = useState("")

    useEffect(() => {
        setHostState("https://")
        setMethodState("GET")
        setHasBodyState(false)
        setHeadersState([
            {
                id: 0,
                name: "",
                value: ""
            }
        ])
    }, [])

    useEffect(() => {
        if (headersState.length === 0) {
            addHeader()
        }
    })

    function onMethodChange(event) {
        if (event.target.value !== "GET") {
            setHasBodyState(true)
        } else {
            setHasBodyState(false)
        }
        setMethodState(event.target.value)
    }

    function onHostChange(event) {
        setHostState(event.target.value)
    }

    function addHeader() {
        headersState.push({ name: "", value: "", id: 0 })
        const headers = headersState.map((header, i) => { header.id = i; return header })
        setHeadersState(headers)
    }

    function removeHeader(id) {
        const headers = headersState.filter(header => header.id !== id)
        setHeadersState(headers)
    }

    function updateHeaderName(value, id) {
        const headers = [...headersState]
        headers[id].name = value;
        setHeadersState(headers)
    }

    function updateHeaderValue(value, id) {
        const headers = [...headersState]
        headers[id].value = value;
        setHeadersState(headers)
    }

    function updateBodyValue(value){
        setBodyState(value)
    }

    function submit(){
        sendRequest(
            hostState,
            methodState,
            headersState,
            hasBodyState? bodyState: "",
        );
    }

    const mainUtils = {
        onMethodChange: onMethodChange,
        onHostChange: onHostChange,
        submit: submit
    }

    const headersUtils = {
        addHeader: addHeader,
        removeHeader: removeHeader,
        updateHeaderName: updateHeaderName,
        updateHeaderValue: updateHeaderValue
    }
    const bodyUtils = {
        updateBodyValue: updateBodyValue
    }
    return (
        <form autoComplete="off">
            <MainData method={methodState} host={hostState} mainUtils={mainUtils} />
            <Tabs hasBody={hasBodyState} headers={headersState} body={bodyState} bodyUtils={bodyUtils} headersUtils={headersUtils} />
        </form>
    )
}

export default RequestFrom
