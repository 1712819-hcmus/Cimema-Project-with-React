import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  
export default function logProps(HeadingComponent,DetailComponent) {
    return function (props) {
        const classes = useStyles();
        return (
            <ExpansionPanel expanded={props.expanded} onChange={props.handleChange} >
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                  <HeadingComponent  />
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <DetailComponent  />
              </ExpansionPanelDetails>
            </ExpansionPanel>
           
        );
      }
  }