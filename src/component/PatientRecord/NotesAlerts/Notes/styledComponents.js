import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const CommentText = styled(Typography) ({
    padding : 15,
    margin: 3,
    borderRadius: 25,
})

export const GreyCommentText = styled(CommentText) ({
    backgroundColor: "#F5F5F5"
})

export const BlueCommentText = styled(CommentText) ({
    backgroundColor: "#3F51B5",
    color: "white",
})

export const Name = styled(Typography) ({
    fontSize: 10,
    fontWeight: "300"
})

export const Date = styled(Typography) ({
    alignSelf: "flex-end",
    fontSize: 10,
    fontWeight: "300"
})

export const StyledMessageBody = styled(Box) ({
    display: "flex",
    flexDirection: "column",
    marginTop: "2%",
    marginBottom: "2%",
    alignItems: "flex-start",
})

export const StyledAvatarAndText = styled(Box) ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
})

export const MessageAlignmentWrapperLeft = styled(Box) ({
    display: "flex",
    justifyContent: "flex-end"
})

export const MessageAlignmentWrapperRight = styled(Box) ({
    display: "flex",
    justifyContent: "flex-start"
})