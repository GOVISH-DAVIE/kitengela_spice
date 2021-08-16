import { Container, Grid, Paper } from "@material-ui/core"
import { Navigation } from "../../navigation"


import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../../utils/utils";
import UserContext, { UserContextInterface } from "../../../utils/context";
import MenuAccordion from "../cartegories/cartegories";



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
                                </Paper>
                            </Grid>

                            <Grid item sm={6} xs={6}>

                                <Paper elevation={0} color={'transparent'} className={classes.paper} >

                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        </div>
    </div>)
}