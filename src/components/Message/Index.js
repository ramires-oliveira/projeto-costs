import { useState, useEffect } from "react";
import { Alert, Collapse, Box, IconButton } from '@mui/material';
import { Close } from "@mui/icons-material";

function Message({ type, text }) {

    const [open, setOpen] = useState(true)

    useEffect(() => {
        let timer;

        if(open){
            timer = setTimeout(() => {
                setOpen(false)
            }, 3000)
        }
        return () => clearTimeout(timer)
    }, [open])

    return (
        <>
            <Box>
                <Collapse in={open}>
                    <Alert
                        severity={type}
                        {...type === "success" && {
                            style:{ backgroundColor: '#32CD32' }
                        }}
                        action={
                            <IconButton
                                aria-label="closed"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false)
                                }}
                            >
                                <Close fontSize="inherit" />
                            </IconButton>

                        }
                        sx={{ mb: 2 }}
                    >
                        {text}
                    </Alert>
                </Collapse>
            </Box>

        </>

    )
}

export default Message