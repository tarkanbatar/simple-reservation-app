import React, {useState} from 'react';
import {Box, Button, TextField, withStyles} from '@material-ui/core';
import {styled} from "@material-ui/core/styles";

const MaterialTextField = styled(TextField)({
    background: 'white',
    borderRadius: '0.25rem',
    border: '1px solid',
    borderColor: 'lightgray',
    minHeight: '24px',
    padding: '3px',
    color: 'black',

});

export default function MTextField() {
    return <Box> <MaterialTextField>Username</MaterialTextField> </Box>
}