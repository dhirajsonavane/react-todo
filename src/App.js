import React from "react";
import "./App.css";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import NavBar from "./shared/NavBar";
import Footer from "./shared/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        <NavBar />

        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: 500, margin: 10 }}>
            <CardContent>
              <TextField
                id="outlined-basic"
                label="Enter a Todo"
                variant="outlined"
                value={this.state.newItem}
                onChange={(e) => this.updateInput(e.target.value)}
                style={{ marginRight: 10 }}
                required
              />

              <Button
                variant="contained"
                color="primary"
                onClick={() => this.addItem(this.state.newItem)}
                disabled={!this.state.newItem.length}
                style={{ marginTop: 10 }}
              >
                Add Todo
              </Button>

              <div className="list">
                <ul>
                  {this.state.list.map((item) => {
                    return (
                      <li key={item.id}>
                        <Checkbox
                          name="idDone"
                          checked={item.isDone}
                          onChange={() => {}}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />

                        {item.value}

                        <IconButton
                          aria-label="delete"
                          onClick={() => this.deleteItem(item.id)}
                          style={{float:'right'}}
                        >
                          <DeleteIcon fontSize="small"/>
                        </IconButton>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
