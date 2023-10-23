import "./css/Portfolio.css"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import profile from '../assets/foto.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
import VerticalTabs from "../components/Tabs";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import Experiencia from "./Experiencia";
import Competencias from "./Competencias";
import { actor } from "../actors/tab";
import { connect } from "react-redux";

function Portfolio(props) {

    function RenderSwitch() {
        switch (props.TabReducer.tab) {
            case 0:
                return <Inicio></Inicio>
            case 1:
                return <Experiencia></Experiencia>
            case 2:
                return <Proyectos></Proyectos>
            case 3:
                return <Competencias></Competencias>
            default:
                return <Inicio></Inicio>;
        }
    }

    return (
        <div>
            <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 4 }}>
                <Grid item xs={2}>
                    <div className="flex-avatar">
                        <Avatar alt="Profile" className="avatar"
                            src={profile}
                            style={{
                                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                backgroundSize: 'cover',
                            }}
                            sx={{ width: 55, height: 55 }} />
                        <p className="name-avatar">Rodrigo Antonio </p>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className="flex-menu">
                        <DehazeIcon
                            className="avatar"
                            style={{
                                color: "#ff014f",
                                fontSize: "45px",
                            }}
                        ></DehazeIcon>
                    </div>
                </Grid>
            </Grid>
            <center className="vertical-tabs">
                    <VerticalTabs></VerticalTabs>
            </center>
            <div className="container">
                <div className="space-menu"></div>
                <RenderSwitch></RenderSwitch>
            </div>
            <br></br>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        TabReducer: state.TabReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        change_tab: (param) => {
            return dispatch(actor.change_tab(param));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
