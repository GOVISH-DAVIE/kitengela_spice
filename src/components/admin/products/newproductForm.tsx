import { Button, createStyles, makeStyles, TextareaAutosize, TextField, Theme } from "@material-ui/core";
import { Image } from "@material-ui/icons";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
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
        tfiled: {
            margin: theme.spacing(1),
            width: '100%',
        },
        radios: {
            color: 'blue'
        }
    }),
);

export const NewProductForm = () => {

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
        <ReactQuill theme="snow"  />
        <br />

        <Button variant='outlined' size='large'> <Image />Upload Main Image </Button>
        <br />
        <Button variant='outlined' size='large'> <Image />Upload Product Images </Button>
        <br />
    </form>)
}