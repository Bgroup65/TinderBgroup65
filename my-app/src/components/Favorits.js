import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "white",
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
  return (
    <div>
      <List className={classes.root}>
          <h4 style={{color:"black"}}>{props.title}</h4>
          {props.persons.map((p) =>
            <ListItem alignItems="flex-right">
              <ListItemAvatar>
                <Avatar alt="Tinder Picture" src={p.Image} />
              </ListItemAvatar>
              <ListItemText
                primary={p.Name + " " +p.FamliyName}
              />
            </ListItem>)}
        
      </List>
    </div>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);