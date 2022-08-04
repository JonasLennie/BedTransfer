import * as React from "react";

import {AcceptedAlertIcon, CanceledAlertIcon, NewMessageAlertIcon, PendingAlertIcon} from "./styledComponents";

const AlertIcon = ({ recordData } ) =>  {
    if (shouldReturnNewMessage(recordData)) {
        return <NewMessageAlertIcon />
    } else {
        return iconBasedOnState(recordData)
    }
}

export default AlertIcon

function shouldReturnNewMessage(recordData) {
    return !(recordData.notes.every((n) => n.read === true))
}

function iconBasedOnState(recordData) {
    switch (recordData.state) {
        case "accepted":
            return <AcceptedAlertIcon />
        case "canceled":
            return <CanceledAlertIcon />
        case "pending":
            return <PendingAlertIcon />
        default:
            throw new Error("Bad State")
    }
}