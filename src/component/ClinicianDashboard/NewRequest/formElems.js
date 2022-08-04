import {FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Button from "@mui/material/Button";

export function MRNTextField() {
    return <TextField required id={"patientMrn"} label={"Patient MRN"} margin={"normal"}/>
}

function genericSelection( { name, label, elems } ) {
    return (
        <FormControl fullWidth required sx={{marginTop: 2}}>
        <InputLabel id={name + "-label"} >{label}</InputLabel>

        <Select
            labelId={name + "-label"}
            id={name}
            label={label}
        >
            {selectionElements(elems)}
        </Select>

    </FormControl>
    )
}

function selectionElements( elems ) {
    return (
        <>
        {elems.map((v) => (
                <MenuItem value={v}>{v}</MenuItem>
            ))}
        </>
    )
}

export function SeveritySelection() {
    const label = "Severity"
    const name = "severity"
    const elems = ["Minimal Urgency", "Greater Urgency", "Life-Threatening"]

    return genericSelection({name, label, elems})
}

export function WardSelection() {
    const label = "Preferred Ward"
    const name = "ward"
    const elems = ["Ward 1", "Ward 2", "Ward 3"]

    return genericSelection({name, label, elems})
}

export function Notes() {
    return <>
        <TextField multiline id={"patientNotes"} rows={4} fullWidth margin={"normal"}/>
        <br />
    </>
}

export function SubmitRequest() {
    return <Button margin={"normal"} variant="contained">Submit New Request</Button>
}