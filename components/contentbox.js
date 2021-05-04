import React, {useState} from 'react';
import {Box} from '@material-ui/core';
import {styled} from "@material-ui/core/styles";

const ContentBox = styled(Box)({
    minHeight: '200px',
    minWidth: '200px',
    background: '#C7F6BB',
});

export default function MContentBox(){
    return <ContentBox/>
}