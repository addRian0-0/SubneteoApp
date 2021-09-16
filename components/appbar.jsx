import React from 'react';
import Head from "next/head";
import Link from "next/link";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function Appbar(props) {
    return (
        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"  />
                <title>Programa de subneteo</title>
            </Head>
            <AppBar position="static" color={props.colorChildren} >
                <Toolbar>
                    <Link href="/">
                        <ArrowBackIcon style={{ fontSize: 30 }} />
                    </Link>
                    <Typography variant="h4" style={{ marginLeft: 25 }} >
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
