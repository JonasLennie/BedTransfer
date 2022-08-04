import Avatar from "@mui/material/Avatar";
import {
    BlueCommentText, GreyCommentText,
    Date,
    MessageAlignmentWrapperLeft, MessageAlignmentWrapperRight,
    Name,
    StyledAvatarAndText,
    StyledMessageBody
} from "./styledComponents";


export function LeftComment ( { message, timestamp } ) {
    return (
        <WrappedContainerLeft>
            <GreyCommentText>{message}</GreyCommentText>
            <Date>{timestamp}</Date>
        </WrappedContainerLeft>
    )
}

export function RightComment ( { message, name, date } ) {
    return (
        <WrappedContainerRight>
            <Name>{name}</Name>
            <AvatarAndRightText name={name} message={message} />
            <Date>{date}</Date>
        </WrappedContainerRight>
    )
}

const WrappedContainerLeft = (props) => {
    return (
        <MessageAlignmentWrapperLeft>
            <StyledMessageBody>
                {props.children}
            </StyledMessageBody>
        </MessageAlignmentWrapperLeft>
    )
}

const WrappedContainerRight = (props) => {
    return (
        <MessageAlignmentWrapperRight>
            <StyledMessageBody>
                {props.children}
            </StyledMessageBody>
        </MessageAlignmentWrapperRight>
    )
}

const AvatarAndRightText = ( { name, message }) => {
    return (
        <StyledAvatarAndText>
            <Avatar alt={name} sx={{margin: "auto"}}/>
            <BlueCommentText>{message}</BlueCommentText>
        </StyledAvatarAndText>
    )
}



