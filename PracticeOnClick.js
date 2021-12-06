import React from 'react';
import './PracticeOnClick.css';


class PracticeOnClick extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
    this.showHiddenBlock = this.showHiddenBlock.bind(this);
    console.log(props);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  showHiddenBlock(targetId) {
    let block = document.querySelector(targetId)
    if(!block) {
      return;
    }
    var currentState = block.getAttribute("style", "display") || "display: none"
    if(currentState.indexOf("block") >= 0) {
      block.setAttribute("style", "display: none")
    } else {
      block.setAttribute("style", "display: block")
    }
  }
  render() {
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log('You clicked submit.');
    }


    return <>
    
      <div className="PracticeOnClick">
        <h1>Practice of onClickEvent</h1>
        
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>

        <br></br>
        <br></br>

        <h2>●토글버튼</h2>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? '효준' : '기묘'}
        </button>

        <br></br>
        <br></br>

        <button onClick={() => this.handleClick()}>
          Click me
        </button>

        <br></br>
        <br></br>
        
        {/* 클릭이벤트 */}
        <button id="btn" type="button" onClick={() => this.showHiddenBlock("#hidden1")}><h3>김기묘</h3></button>
        <h5 id="hidden1">김기묘기미쓰기루</h5>
        <br></br>
        <button id="btn" type="button" onClick={() => this.showHiddenBlock("#hidden2")}><h3>헌진</h3></button>
        <h5 id="hidden2">김기묘기미쓰기루2222</h5>
      </div>
    </>;
  }
}

export default PracticeOnClick;