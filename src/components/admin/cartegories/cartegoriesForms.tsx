import {useState} from 'react'
import { Button, Checkbox, createStyles, Divider, FormControlLabel, InputAdornment, makeStyles, Radio, RadioGroup, TextField, Theme, Typography } from "@material-ui/core";
import { Mail, Sort } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '100%',
            margin: '5px',
            // textAlign:'center'
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',

        },
    }),
);

export const CartegoriesForms = () => {
    const [value, setValue] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };


    const classes = useStyles();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {


        return e.preventDefault();
    }


    return (<form onSubmit={handleSubmit} method='post' className={classes.root} noValidate autoComplete="off">
        <br />
        <Typography variant="h6" gutterBottom>
            New Cartegories
        </Typography>
        <Divider />
        <br />
        <br />

        <TextField type='text' required name='cartegoryName' className={classes.tfiled}
            color="primary" id="standard-basic" label="Cartegory Name" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Sort />
                    </InputAdornment>
                ),
            }} />
        <br />
        <br />

        <FormControlLabel
            value="end"
            control={<Radio name='type' color="primary" />}
            label="Primary"
            labelPlacement="end"
        />
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            <FormControlLabel value="Primary" control={<Radio />} label="Primary" />
            <FormControlLabel value="Sub Cartegory" control={<Radio />} label="Sub Cartegory" /> 
          </RadioGroup>
        {/* <FormControlLabel
            value="end"
            control={<Checkbox name='type' color="primary" />}
            label="Sub Cartegory"
            labelPlacement="end"
        /> */}

        <br />
        <Button style={{
            margin: '10px'
        }} size='large' variant='outlined' type='submit'>
            Create
        </Button>
    </form>)
}