import { Accordion, AccordionDetails, AccordionSummary, Button, createStyles, FormControl, FormControlLabel, FormLabel, ListItem, ListItemText, makeStyles, Radio, RadioGroup, TextareaAutosize, TextField, Theme, Typography } from "@material-ui/core";
import { FC, Fragment, useState } from "react"
import { cartegoriesItemInterface } from "../cartegories/newCartegories"

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
export const SelectCartegories: FC<{
    cartegoryItem: cartegoriesItemInterface[],
    loading: boolean
}> = ({ cartegoryItem, loading }) => {


    const [bto, setBto] = useState('');
    const [subcategoryBto, setsubcategoryBto] = useState('')
    const handleChangeBto = (event: React.ChangeEvent<HTMLInputElement>) => setBto((event.target as HTMLInputElement).value);
    const handleChangeSubBto = (event: React.ChangeEvent<HTMLInputElement>) => setsubcategoryBto((event.target as HTMLInputElement).value);
    const handleParent = (e: cartegoriesItemInterface) => setBto(e.id.toString())



    const classes = useStyles();

    return <Fragment>
        <RadioGroup className={classes.root} aria-label="gender" name="belongto" value={bto} onChange={handleChangeBto}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Sub Cartegory Of:</FormLabel>
            </FormControl>
            <br />

            {
                loading ? <>loading...</> : cartegoryItem.map((e, i) => e.belongsTo == null ? <Accordion>
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

    </Fragment>
}