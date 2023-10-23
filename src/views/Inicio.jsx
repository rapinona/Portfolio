import "./css/inicio.css"
import Grid from '@mui/material/Grid';
import profileContainer from '../assets/profile-container.png'
import {
    BsGithub,
    BsLinkedin,
    BsFacebook
} from "react-icons/bs";
import { useEffect } from "react";

function Inicio() {

    useEffect(() => {
        document.querySelector('.container-inicio').classList.add('show');
    })

    return (
        <div className="container-inicio">
            <center style={{ width: "100%" }}>
                <div className="welcome-container">
                    <p className="welcome" >Welcome...</p>
                    <h1 className="hello">Hi, I'm <span className="hello-name">Rodrigo Piñón</span> a Developer.</h1>
                    <center>
                        <div class="window">
                            <div class="titlebar">
                                <div class="buttons">
                                    <div class="close">
                                        <a class="closebutton" href="#"><span><strong>x</strong></span></a>
                                    </div>
                                    <div class="minimize">
                                        <a class="minimizebutton" href="#"><span><strong>&ndash;</strong></span></a>
                                    </div>
                                    <div class="zoom">
                                        <a class="zoombutton" href="#"><span><strong>+</strong></span></a>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <h3>Hey! What's up?</h3>
                                I am 24 years old, I really want to learn, I have focused my skills on native mobile and fullstack web development as well as the use of GCP.
                            </div>
                        </div>
                        <div className="redes">
                            <Grid container spacing={4} columns={{ xs: 12, sm: 12, md: 12 }}>
                                <Grid item xs={4}>
                                    <div className="box">
                                        <BsLinkedin
                                            style={{
                                                color: "#0077b7",
                                                fontSize: "30px",
                                            }}></BsLinkedin>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="box">
                                        <BsGithub
                                            style={{
                                                fontSize: "30px",
                                            }}></BsGithub>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="box">
                                        <BsFacebook
                                            style={{
                                                color: "#1977f3",
                                                fontSize: "30px",
                                            }}></BsFacebook>
                                    </div>
                                </Grid>
                            </Grid>

                        </div>
                    </center>
                </div>
            </center>
            <center style={{ width: "100%" }}>
                <div className="profile-container">
                    <img className="foto" src={profileContainer}></img>
                    <div className="circle"></div>
                </div>
            </center>
        </div>
    );
}

export default Inicio;
