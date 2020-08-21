import React, { Component } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    display: 'block',
    backgroundColor: 'white'
  },
  eachac: {
    width: '25%',
    height: '50px',
    fontSize: '25px',
    // backgroundColor: 'pink',
    color: ' black'
  },

  each: {
    width: '25%',
    height: '50px',
    fontSize: '25px',
    // backgroundColor: 'blue',
    color: 'black'
  },


  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  textbox: {
    height: '60px',
    // backgroundColor: '#bbb',
    width: '100%',
    fontSize: '25px',
    textAlign: 'right',
  }
});


class Simplecalculator extends Component {
  state = {
    operand1: 0,
    operand2: '',
    op: ''
  }

  fun1 = (e) => {
    if (this.state.operand1 === 0) {
      this.setState({
        operand1: e.target.value
      });
    }
    else {
      this.setState({
        operand1: this.state.operand1 + e.target.value
      })
    }
  };
  operation = (e) => {
    this.setState({
      operand2: this.state.operand1,
      op: e.target.value,
      operand1: ''
    })
  }
  final = (e) => {
    this.setState({
      operand1: this.state.operand1 + e.target.value,
    })
    if (this.state.op === "+") {
      this.setState({
        operand1: parseFloat(this.state.operand2) + parseFloat(this.state.operand1)
      })
    }
    if (this.state.op === "-") {
      this.setState({
        operand1: parseFloat(this.state.operand2) - parseFloat(this.state.operand1)
      })
    }
    if (this.state.op === "*") {
      this.setState({
        operand1: parseInt(this.state.operand2) * parseInt(this.state.operand1)
      })
    }
    if (this.state.op === "/") {
      this.setState({
        operand1: parseInt(this.state.operand2) / parseInt(this.state.operand1)
      })
    }
    if (this.state.op === "%") {
      this.setState({
        operand1: parseInt(this.state.operand2) % parseInt(this.state.operand1)
      })
    }

  }
  plusminus = (e) => {
    if ((this.state.operand1[0]) === '-') {
      this.setState({
        operand1: this.state.operand1
      })
    }
    else {
      this.setState({
        operand1: '-' + this.state.operand1
      })
    }
  }
  erase = () => {
    this.setState({
      operand1: 0
    })
  }
  onCero = () => {
    this.setState({
      operand1: (this.state.operand1).substring(0, (this.state.operand1).length - 1)
    })
  };
  render() {
    const { classes } = this.props;

    return (
      <div md={12} xs={12}>
        <div className={classes.root}>
          <AppBar
            position="static"
            align="center"
            color="secondary" >
            <Toolbar >

              <Typography variant="h6" >
                Calculator App
                        </Typography>
            </Toolbar >
          </AppBar>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "40px" }}>
          <Grid container>
            <Grid item md={4} />
            <Grid item md={4}>
              <Card style={{
                margin: "auto",
                boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.3)",
                "&:hover": {
                  boxShadow: "0 16px 30px 12.125px rgba(0,0,0,0.3)"
                }
              }}>
                <CardContent>

                  <input
                    className={classes.textbox} id="display" type="text" readOnly value={this.state.operand1} label="Firstname" />
                  <div className={classes.button}>
                    <button className={classes.each} value="C" id="C" onClick={(e) => this.erase(e)}>C</button>
                    <button className={classes.each} value="&#177;" id="&#177;" onClick={(e) => this.plusminus(e)}>&#177;</button>
                    <button className={classes.each} value="%" id="%" onClick={(e) => this.operation(e)}>%</button>
                    <button className={classes.eachac} value="AC" id="AC" onClick={(e) => this.onCero(e)}>AC</button>

                    <button className={classes.each} value="7" id="7" onClick={(e) => this.fun1(e)}>7</button>
                    <button className={classes.each} value="8" id="8" onClick={(e) => this.fun1(e)}>8</button>
                    <button className={classes.each} value="9" id="9" onClick={(e) => this.fun1(e)}>9</button>
                    <button className={classes.each} value="+" id="+" onClick={(e) => this.operation(e)}>+</button>


                    <button className={classes.each} value="4" id="4" onClick={(e) => this.fun1(e)}>4</button>
                    <button className={classes.each} value="5" id="5" onClick={(e) => this.fun1(e)}>5</button>
                    <button className={classes.each} value="6" id="6" onClick={(e) => this.fun1(e)}>6</button>
                    <button className={classes.each} value="-" id="-" onClick={(e) => this.operation(e)}>-</button>


                    <button className={classes.each} value="1" id="1" onClick={(e) => this.fun1(e)}>1</button>
                    <button className={classes.each} value="2" id="2" onClick={(e) => this.fun1(e)}>2</button>
                    <button className={classes.each} value="3" id="3" onClick={(e) => this.fun1(e)}>3</button>
                    <button className={classes.each} value="*" id="*" onClick={(e) => this.operation(e)}>*</button>

                    <button className={classes.each} value="0" id="0" onClick={(e) => this.fun1(e)}>0</button>
                    <button className={classes.each} value="." id="." onClick={(e) => this.fun1(e)}>.</button>
                    <button className={classes.eachac} value="=" id="=" onClick={(e) => this.final(e)}>=</button>
                    <button className={classes.each} value="/" id="/" onClick={(e) => this.operation(e)}>/</button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4} />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Simplecalculator);
