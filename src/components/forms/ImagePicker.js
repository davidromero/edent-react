import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

class ImagePicker extends Component {
  state = {
    avatar: null,
  };

  handleImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      this.setState({ avatar: [reader.result]})
    }.bind(this);
  };


  render() {
    const {classes} = this.props;

    return (
      <div className={classes.main}>
        <input accept="image/*" className={classes.input} id="contained-button-file" type="file"
               onChange={this.handleImage}/>
        <Avatar className={classes.avatar} src={this.state.avatar}/>
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Seleccionar Imagen
          </Button>
        </label>
      </div>
    );
  }
}

const styles = theme => ({
  main: {
    width: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    height: "150px",
    width: "150px",
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


ImagePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImagePicker);