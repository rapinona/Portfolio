import "./css/competencias.css"
import { useEffect } from "react";
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai";
import { SiJavascript, SiMongodb, SiKotlin, SiJira, SiConfluence } from "react-icons/si";
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaSwift } from "react-icons/fa";
import { DiFirebase, DiGoogleCloudPlatform } from "react-icons/di";

function Competencias() {

    useEffect(() => {
        document.querySelector('.container-competencias').classList.add('show');
    })

    return (
        <div className="container-competencias">
            <center>
                <h1 className="titulo-competencias">Competencias</h1>
                <Divider style={{ marginTop: "30px", color:"#ff014f", fontSize:"20px" }}>Front End</Divider>
                <div className="redes">
                    <Grid container spacing={12} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Javascript</p>
                                <SiJavascript className="icon"></SiJavascript>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>React</p>
                                <FaReact className="icon"></FaReact>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Vue</p>
                                <FaVuejs className="icon"></FaVuejs>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Swift</p>
                                <FaSwift className="icon"></FaSwift>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Kotlin</p>
                                <SiKotlin className="icon"></SiKotlin>
                            </div>
                        </Grid>
                    </Grid>

                </div>
                <Divider style={{color:"#ff014f", fontSize:"20px" }}>Back End</Divider>
                <div className="redes">
                    <Grid container spacing={12} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>NodeJS</p>
                                <FaNodeJs className="icon"></FaNodeJs>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>GCP</p>
                                <DiGoogleCloudPlatform className="icon"></DiGoogleCloudPlatform>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Python</p>
                                <FaPython className="icon"></FaPython>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>SQL</p>
                                <AiOutlineConsoleSql className="icon"></AiOutlineConsoleSql>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>MongoDB</p>
                                <SiMongodb className="icon"></SiMongodb>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Firebase</p>
                                <DiFirebase className="icon"></DiFirebase>
                            </div>
                        </Grid>
                    </Grid>

                </div>
                <Divider style={{color:"#ff014f", fontSize:"20px" }}>Work Tools</Divider>
                <div className="redes">
                    <Grid container spacing={12} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Git</p>
                                <AiFillGithub className="icon"></AiFillGithub>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Jira</p>
                                <SiJira className="icon"></SiJira>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="box-competencias">
                                <p>Confluence</p>
                                <SiConfluence className="icon"></SiConfluence>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </center>
        </div>
    );
}

export default Competencias;
