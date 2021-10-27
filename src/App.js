import { Component } from "react";
import Counters from "./components/counters"
import Navbar from "./components/navbar"
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, status: true },
      { id: 2, value: 7, status: true },
      { id: 3, value: 0, status: true },
      { id: 4, value: 0, status: true }
    ],
    tags: [
      { id: 1, name: 'tag1' },
      { id: 2, name: 'tag2' },
      { id: 3, name: 'tag3' }
    ]
  };

  // Called only once when the instance of class is created
  constructor(props) {
    super(props);
    console.log('App - constructor', this.props);
    // this.state = this.props.something; // set the state directly do not use setState here
  }

  componentDidMount() {
    // Ajax call to get data from the server;
    //this.setState({something})
    console.log('App - Mounted');
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters: counters });
  };

  handleDelete = (counter) => {
    //console.log('Event Handler Called!', counter);
    const counters = this.state.counters.filter((c) => c.id !== counter);
    this.setState({ counters: counters });
    // console.log(counters);
  };

  render() {
    console.log('App - Rendered')
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            tags={this.state.tags}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

export default App;
