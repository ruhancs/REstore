import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";
// import { useState } from "react";

export default function AboutPage() {
    // const [validationErrors, setValidationErrors] =useState<string[]|[]>([])

    // function getValidationErrors() {
    //     agent.TestErrors.getValidationError()
    //         .then(() => console.log("should not see this"))
    //         .catch(err => setValidationErrors(err))
    // }

    return (
        <Container>
            <Typography gutterBottom variant="h2">
                Errors for testing
            </Typography>
            <ButtonGroup fullWidth>
                <Button 
                    variant="contained" 
                    onClick={() => agent.TestErrors.get400Error().catch(err => console.log(err))} 
                >
                    Test Error 400
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => agent.TestErrors.get401Error().catch(err => console.log(err))} 
                >
                    Test Error 401
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => agent.TestErrors.get404Error().catch(err => console.log(err))} 
                >
                    Test Error 404
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => agent.TestErrors.get500Error().catch(err => console.log(err))} 
                >
                    Test Error 500
                </Button>
                <Button 
                    variant="contained" 
                    onClick={() => agent.TestErrors.getValidationError().catch(err => console.log(err))} 
                >
                    Test Error Validaation error
                </Button>

            </ButtonGroup>
        </Container>
    )
}