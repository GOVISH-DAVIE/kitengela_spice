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

export const NewProductForm: FC<{ token: string | null }> = ({ token }) => {
    const [catregoryItem, setCatregoryItem] = useState(defaultCArtegoryVal)
    const [cartegoriesLoading, setCartegoriesLoading] = useState(true)
    useEffect(() => {
        axios.get(`${url}cartegories`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer  ${token}`
            }
        }).then(data => {
            setCartegoriesLoading(false)
            setCatregoryItem(data.data)
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [bto, setBto] = useState('');
    const [subcategoryBto, setsubcategoryBto] = useState('')
    const handleChangeBto = (event: React.ChangeEvent<HTMLInputElement>) => setBto((event.target as HTMLInputElement).value);
    const handleChangeSubBto = (event: React.ChangeEvent<HTMLInputElement>) => setsubcategoryBto((event.target as HTMLInputElement).value);
    const handleParent = (e: cartegoriesItemInterface) => setBto(e.id.toString())

    const classes = useStyles();
    return (<form action="" className={classes.root}>
        <TextField type='text' required name='name' className={classes.tfiled}
            color="primary" id="standard-basic" label="Product Name" />
        <TextField
            id="outlined-multiline-static"
            label="Short Description"
            className={classes.tfiled}
            multiline
            rows={4}
            variant="outlined"
        />
        <br />
        <ReactQuill theme="snow" />
        <br />

        <Button variant='outlined' size='large'> <Image />Upload Main Image </Button>
        <br />
        <br />
        <Button variant='outlined' size='large'> <Image />Upload Product Images </Button>
        <br />
        <br />
        <FormControl component="fieldset">
            <FormLabel component="legend">Sub Cartegory Of:</FormLabel>
        </FormControl>
        {
            cartegoriesLoading ? <p>Loading...</p> : <RadioGroup aria-label="gender" name="belongto" value={bto} onChange={handleChangeBto}>

                {
                    catregoryItem.map((e, i) => e.belongsTo == null ? <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                <FormControlLabel key={`${i}radios`} value={`${e.id}`} control={<Radio color="default" />} label={e.name} />
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {
                                    e.get_sub_cartegories.map((value, index) => <RadioGroup aria-label="gender" name="belongto" value={subcategoryBto} onChange={handleChangeSubBto}> <ListItem key={`item${index}`} button>
                                        <ListItemText primary={<FormControlLabel key={`${i}radiosSubcategory`} value={`${value.id}`} control={<Radio color="default" />} onClick={() => handleParent(e)} label={value.name} />
                                        } />
                                    </ListItem> </RadioGroup>
                                    )
                                }
                            </Typography>
                        </AccordionDetails>
                    </Accordion> : <></>

                    )
                }
            </RadioGroup>
        }
        <br /><br />
        <ReactQuill theme="snow" />
        <br />
        <Button variant='outlined' size='large' color='inherit' > Create Product</Button>
    </form>)
}