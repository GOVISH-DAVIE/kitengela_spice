import { createStyles, InputAdornment, makeStyles, TextField, Theme } from "@material-ui/core";
import { Mail, Sort } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // background:'red',
            width: '50%',
        },
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',

        },
    }),
);

export const CartegoriesForms = () => {


    const classes = useStyles();


    return (<form className={classes.root} noValidate autoComplete="off">
        <TextField type='email' required name='email' className={classes.tfiled}
            color="primary" id="standard-basic" label="Email" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Sort />
                    </InputAdornment>
                ),
            }} />

    </form>)
}