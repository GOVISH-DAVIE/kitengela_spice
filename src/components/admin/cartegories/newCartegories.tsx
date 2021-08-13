import { Container, Grid, Paper } from "@material-ui/core"
import { Navigation } from "../../navigation"
import MenuAccordion from "./cartegories"
import { CartegoriesForms } from "./cartegoriesForms"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      display:'flex',
      alignContent:"center",
      justifyContent:"center",
      color: theme.palette.text.secondary,
    },
  }),
);


export const NewCartegories = () => {
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
                    <Grid className={classes.root} >
                        <Grid item xs={6}>

                            <Paper className={classes.paper} >
                                 
                                <CartegoriesForms />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>

        </div>
    </div>)
}