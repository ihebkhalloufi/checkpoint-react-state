import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      toggle: false,
      timer: 0,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ toggle: !this.state.toggle });
    if (!this.state.toggle) {
      setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000);
    }else { this.setState({timer: 0})}
  }
          
  render() {
    return (
      
      <div className='App'>
     
    


      <div>
        {this.state.toggle ?       <div>
       <div className='img'>
         <img className='image'src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Stalin_Full_Image.jpg/220px-Stalin_Full_Image.jpg'/>

       </div>

       <div id='fullname'>
         <h2> Joseph Vissarionovich Stalin</h2>
       </div>
       <div className='bio'>
        <p>
        Joseph Vissarionovich Stalin[f] (18 December [O.S. 6 December] 1878[1] – 5 March 1953) was a Georgian revolutionary and Soviet political leader who governed the Soviet Union from 1924 until his death in 1953.
         He served as both General Secretary of the Communist Party of the Soviet Union (1922–1952) and Chairman of the Council of Ministers of the Soviet Union (1941–1953). Despite initially governing the country as part of a collective leadership,
          he ultimately consolidated power to become the Soviet Union's dictator by the 1930s. A communist ideologically committed to the Leninist interpretation of Marxism, Stalin formalised these ideas as Marxism–Leninism while his own policies are known as Stalinism. 
          
        </p>
       </div>
       <div className=' Timer'>
       {this.state.timer}
       </div>
      </div> : null}
        <button onClick={this.toggle}>ClickMe</button>
        <div>
          
        </div>
      </div>
      </div>
    );
  }
}
export default App;
