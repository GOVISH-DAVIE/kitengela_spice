import { Accordion, AccordionDetails, AccordionSummary, Button, createStyles, FormControl, FormControlLabel, FormLabel, ListItem, ListItemText, makeStyles, Radio, RadioGroup, TextareaAutosize, TextField, Theme, Typography } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import 'react-quill/dist/quill.snow.css';

import ReactQuill from "react-quill";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../../utils/utils";
import { cartegoriesItemInterface, defaultCArtegoryVal } from "../cartegories/newCartegories";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '100%',
            margin: '5px',
            // textAlign:'center'
            alignItems: 'left',
            justifyItems: 'left'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',
        },
        radios: {
            color: 'blue'
        }
    }),
);

export const NewProductForm: FC<{ 
     updateProductName: React.Dispatch<React.SetStateAction<string>> ,
     updateShortDes: React.Dispatch<React.SetStateAction<string>> 
    }> = ({  updateProductName, updateShortDes }) => {



    const handleProductNameChange = (e: React.ChangeEvent<HTMLInputElement>) => updateProductName(e.currentTarget.value);
    const handleShortDescription = (e: React.ChangeEvent<HTMLInputElement>) => updateShortDes(e.currentTarget.value);


    const classes = useStyles();
    return (<form action="" className={classes.root}>
        <TextField type='text' required name='name' className={classes.tfiled}
            color="primary" id="standard-basic" label="Product Name" onChange={handleProductNameChange} />
        <TextField
            id="outlined-multiline-static"
            label="Short Description"
            className={classes.tfiled}
            multiline
            rows={4}
            onChange={handleShortDescription}
            variant="outlined"
        />
        <br />
        <ReactQuill theme="snow" />
        <br />



        <br />
    </form>)
}