import * as React from 'react';
import "./css/Tabs.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { actor } from "../actors/tab";
import { connect } from "react-redux";

function VerticalTabs(props) {

    React.useEffect(()=>{
        window.addEventListener('resize', checkForWindowResize)
        checkForWindowResize()
    })

    function checkForWindowResize() {
    
        if (window.innerWidth < 1100) {
           setView("horizontal")
        }
        else {
            setView("vertical")
        }
    }

    const [value, setValue] = React.useState(0);
    const [view, setView] = React.useState("vertical");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.change_tab(newValue)
    };

    return (
        <div className='categories'>
            <Tabs
                orientation={view}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={ view==="vertical" ? {borderRight: 1, borderColor: 'divider'} : {} }
            >
                <Tab 
                    style={view==="vertical" ? {marginBottom:"20px"} : {}}
                    className='tab' label="Inicio" value={0}  />
                <Tab 
                    style={view==="vertical" ? {marginBottom:"20px"} : {}}
                    className='tab' label="Experiencia" value={1}  />
                <Tab 
                    style={view==="vertical" ? {marginBottom:"20px"} : {}}
                    className='tab' label="Proyectos" value={2}  />
                <Tab 
                    style={view==="vertical" ? {marginBottom:"20px"} : {}}
                    className='tab' label="Competencias" value={3}  />
            </Tabs>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(VerticalTabs);