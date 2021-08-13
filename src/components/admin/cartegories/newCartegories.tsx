import { Container, Grid, Paper } from "@material-ui/core"
import { Navigation } from "../../navigation"
import MenuAccordion from "./cartegories"
import { CartegoriesForms } from "./cartegoriesForms"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from "axios";
import { useEffect , useState} from "react";
import { url } from "../../../utils/utils";
import UserContext, { UserContextInterface } from "../../../utils/context";
import {  CartegoryItemComponent } from "./CartegoryItems";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            // float: 'left',
              display:'flex',
              alignContent:"center",
              justifyContent:"center",
              color: theme.palette.text.secondary,
        },
    }),
);





export const NewCartegories = ()=><UserContext.Consumer>
    {
        context=><NewCartegoriesFragment user={context.value.user} token={context.value.token} />
    }
</UserContext.Consumer>

export const NewCartegoriesFragment:React.FC<UserContextInterface> = ({user, token}) => {
    const [catregoryItem, setCatregoryItem] = useState([])
  useEffect(() => {
     axios.get(`${url}cartegories`,{
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer  ${token}`
        }
     }).then(data=>{
         console.log('====================================');
         console.log(data);
         console.log('====================================');
     })
     ;
  })
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
                                    <CartegoriesForms />
                                </Paper>
                            </Grid>

                            <Grid item sm={6} xs={6}>
                                
                                <Paper className={classes.paper} >
                                 
                                <CartegoryItemComponent />
                            </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        </div>
    </div>)
}