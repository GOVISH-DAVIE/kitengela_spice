import { Container, Grid, Paper } from "@material-ui/core"
import { Navigation } from "../../navigation"


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../../utils/utils";
import UserContext, { UserContextInterface } from "../../../utils/context";
import MenuAccordion from "../cartegories/cartegories";
import { NewProductForm } from "./newproductForm";
import { cartegoriesItemInterface, defaultCArtegoryVal } from "../cartegories/newCartegories";
import { SelectCartegories } from "./selectCartyegories";
import { UploadImages } from "./uploadImages";



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            // float: 'left',
            display: 'flex',
            alignContent: "center",
            justifyContent: "center",
            color: theme.palette.text.secondary,
        },
    }),
);
export const NewProducts = () => <UserContext.Consumer>
    {
        context => <NewProductsFragment user={context.value.user} token={context.value.token} />
    }
</UserContext.Consumer>

const NewProductsFragment: React.FC<UserContextInterface> = ({ user, token }) => {
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
    const [cartegories, setCartegories] = useState(defaultCArtegoryVal)
    const classes = useStyles();
    return (<div>
        <Navigation />
        <div className="adminConsole">
            <div className="sidebar">
                <div className="close">
                    close
                </div>
                <div className="menu">
                    <MenuAccordion />
                </div>
            </div>
            <div className="body">
                <Container>
                    <div className={classes.root} >
                        <Grid container spacing={3}>
                            <Grid item sm={6} xs={6}>

                                <Paper className={classes.paper} >
                                    <NewProductForm token={token} />
                                </Paper>
                            </Grid>

                            <Grid item sm={6} xs={6}>

                                <Paper elevation={0} color={'transparent'} className={classes.paper} >
                                    <SelectCartegories cartegoryItem={cartegories} />
                                </Paper>
                                <br />
                                <Paper elevation={0} color={'transparent'} className={classes.paper} >
                                    <UploadImages />
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        </div>
    </div>)
}