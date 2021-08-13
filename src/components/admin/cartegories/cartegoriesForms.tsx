import { Button, Checkbox, createStyles, Divider, FormControlLabel, InputAdornment, makeStyles, TextField, Theme, Typography } from "@material-ui/core";
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


    const classes = useStyles();
    const handleSubmit = () => { }


    return (<form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        <br />
        <Typography variant="h6" gutterBottom>
            New Cartegories
        </Typography>
        <Divider />
        <br />
        <br />

        <TextField type='text' required name='CartegoryName' className={classes.tfiled}
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
            control={<Checkbox name='type' color="primary" />}
            label="Primary"
            labelPlacement="end"
        />
        <FormControlLabel
            value="end"
            control={<Checkbox name='type' color="primary" />}
            label="Sub Cartegory"
            labelPlacement="end"
        />

        <br />
        <Button style={{
            margin: '10px'
        }} size='large' variant='outlined' type='submit'>
            Create
        </Button>
    </form>)
}