import { useState } from 'react'
import { Button, Container, createStyles, Divider, FormControl, FormControlLabel, FormLabel, InputAdornment, makeStyles, Radio, RadioGroup, TextField, Theme, Typography } from "@material-ui/core";
import { Sort } from "@material-ui/icons";
import UserContext, { UserContextInterface } from '../../../utils/context';
import axios from 'axios';
import { url } from '../../../utils/utils';
import { cartegoriesItemInterface } from './newCartegories';

// interface  
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
        radios: {
            color: 'blue'
        }
    }),
);

const CartegoriesFragment: React.FC<{ addToList: (form: cartegoriesItemInterface) => void, user:UserContextInterface }> = ({ addToList, user }) => {
    const [value, setValue] = useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };


    const classes = useStyles();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        console.log(value);
        let fd = new FormData(e.currentTarget)


        axios.post(`${url}cartegories`, fd, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer  ${user.token}`
            }
        })
            .then(data => {
                console.log(data)
                addToList(data.data)
            })
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

        <TextField type='text' required name='name' className={classes.tfiled}
            color="primary" id="standard-basic" label="Cartegory Name" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Sort />
                    </InputAdornment>
                ),
            }} />
        <br />
        <br />
        <Container>

            <FormControl component="fieldset">
                <FormLabel component="legend">Menu Type</FormLabel>
            </FormControl>
            <RadioGroup aria-label="gender" name="type" value={value} onChange={handleChange}>
                <FormControlLabel value="Primary" control={<Radio color="default" />} label="Primary" />
                <FormControlLabel value="SubCartegory" control={<Radio color="default" />} label="Sub Cartegory" />
            </RadioGroup>
        </Container>

        <br />
        <Button style={{
            margin: '10px'
        }} size='large' variant='outlined' type='submit'>
            Create
        </Button>
    </form>)
}

export const CartegoriesForms: React.FC<{ addToList: (form: cartegoriesItemInterface) => void }> = ({ addToList }) => {

    return <UserContext.Consumer>
        {
            context => <CartegoriesFragment addToList={addToList}   user={context.value} />
        }
    </UserContext.Consumer>
}