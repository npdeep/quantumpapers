import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Button,
} from "@mui/material";

const words = [
  ["Fermi-Dirac", "Bose-Hubbard", "Jaynes-Cummings"],
  ["Phase Transition", "Insulator", "Superconductivity", "Superfluidity", ""],
  ["in", "of", "and"],
  ["1D", "2D", "3D", "(1+1)D", "(2+1)D", "(2+3)D"],
  ["Quantum"],
  ["Ferromagnetism", "Criticality", "Spin Glass"],
];

class App extends React.Component {
  constructor({}) {
    super({});
    this.state = {
      selectedWords: ["", "", "", "", "Quantum", ""],
    };
  }

  componentDidMount = () => {
    document.title = "Make a Quantum Paper";
  }

  searchArticle = () => {
    const {selectedWords} = this.state;
    const searchText = selectedWords.join(" ");
    window.open(`https://www.google.com/search?q=${searchText}`)
    
  };

  onChange = (e) => {
    const targetIndex = Number(e.target.name);
    const { selectedWords } = this.state;
    console.log(targetIndex);
    this.setState({
      selectedWords: [
        ...selectedWords.slice(0, targetIndex),
        e.target.value,
        ...selectedWords.slice(targetIndex + 1, selectedWords.length),
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <div>
            {words.map((wordlist, idx) => (
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                {idx === 4 ? (
                  <Select
                    labelId={`title-word-${idx}`}
                    id={`title-word-${idx}`}
                    disabled
                    value="Quantum"
                  >
                    <MenuItem value="Quantum">Quantum</MenuItem>
                  </Select>
                ) : (
                  <Select
                    labelId={`title-word-${idx}`}
                    id={`title-word-${idx}`}
                    name={idx}
                    displayEmpty
                    onChange={this.onChange}
                  >
                    {wordlist.map((word) => (
                      <MenuItem value={word}>{word}</MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            ))}
          </div>
          <div>
            <Button variant="contained" onClick={this.searchArticle}>
              Get Paper!
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
