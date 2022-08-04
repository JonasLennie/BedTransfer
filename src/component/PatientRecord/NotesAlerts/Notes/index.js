import {styled} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import {AddComment} from "@mui/icons-material";
import * as React from 'react';
import {Modal, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import SendIcon from '@mui/icons-material/Send';
import Typography from "@mui/material/Typography";

import {LeftComment, RightComment} from "./singleNote";

export default function Notes({ recordData }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <OpenCommentsButton open={handleOpen} />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <NotesList recordData={recordData}/>
            </Modal>
        </>
    );
}

function OpenCommentsButton( { open }) {
    return (
    <IconButton
        sx={{ margin: "auto" }}
        onClick={open}>
        <AddComment />
    </IconButton>)
}

const NotesList = ( { recordData }) => {
    return (
        <StyledModalBox>
            <Typography>Request Status: {recordData.state}</Typography>

            {getAllComments( recordData )}

            <SendMessage/>
        </StyledModalBox>
    )
}

function getAllComments(recordData) {
    return <>
        {(recordData.notes.map((v) =>
            <GetNextComment message={v} me={recordData.requester.name}/>
        ))}
    </>;
}

function GetNextComment ( { message, me } ) {
    if (meSentMessage(me, message)) {
        return <RightMessage message={message} />
    } else {
        return <LeftMessage message={message} />
    }
}

function meSentMessage(me, message) {
    return me === message.sender.name;
}

const LeftMessage = ( { message } ) => {
    let customDateFormat = getCustomDate(message.timestamp)

    return <LeftComment message={message.message} timestamp={customDateFormat}/>
}

const RightMessage = ( { message } ) => {
    let customDateFormat = getCustomDate(message.timestamp)
    
    return <RightComment message={message.message} name={message.sender.name} date={customDateFormat}/>
}


function getCustomDate(timestamp) {
    let messageTS = new Date(timestamp)
    let today = new Date()

    let isSameDay = today.toDateString() === messageTS.toDateString()
    let isSameYear = today.getFullYear() === messageTS.getFullYear()

    if (isSameDay) {
        return getTimeOnly(messageTS)
    } else if (isSameYear) {
        return getDateNotYear(messageTS)
    } else {
        return getFullDate(messageTS)
    }
}

function getTimeOnly( timestamp ) {
    let timeOnlyOptions = {hour: "numeric", minute: "numeric"}

    return timestamp.toLocaleString("EN-GB", timeOnlyOptions)
}

function getDateNotYear( timestamp ) {
    let dateOnlyOptions = {weekday: "short", day: "numeric", month: "short"}

    return timestamp.toLocaleString("EN-GB", dateOnlyOptions)
}

function getFullDate( timestamp ) {
    let dateOnlyOptions = {weekday: "short", day: "numeric", month: "short", year: "numeric"}

    return timestamp.toLocaleString("EN-GB", dateOnlyOptions)
}

const StyledModalBox = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'white',
    boxShadow: 24,
    padding: 15,
    borderRadius: 10
})

const SendMessage = () => {
    return (
        <SendMessageBox >
            <TextField id="newMessage" variant="outlined" fullWidth/>
            <IconButton sx={{margin : "auto"}} >
                <SendIcon fontSize={"large"} sx={{margin: "auto"}}/>
            </IconButton>
        </SendMessageBox>
    )
}

const SendMessageBox = styled(Box)({
    display: "flex"
})
