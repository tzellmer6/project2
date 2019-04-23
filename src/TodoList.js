import React, { Component } from "react"; 
import "./TodoList.css";
import TodoItems from "./TodoItems";
import styled from 'styled-components';
import { Flex, Box, Link } from "rebass";

const Title = styled.h1`
    font-size: 1.5em;
    text-aligh: center;
    color: #0066FF;
    :hover {
    color: #003399;
}
`

class TodoList extends Component { 
  constructor(props) {    
    super(props);     

    this.state = {    
      items: []  
    };

    this.addItem = this.addItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {    
      itemArray.unshift(
        {      
          text: this._inputElement.value,      
          key: Date.now()    
        }
      );

      this.setState({      
        items: itemArray    
      });   

      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();
  }

  deleteItem(key) {  
    var filteredItems = this.state.items.filter(function (item) {    
      return (item.key !== key);  
    }); 

    this.setState({    
      items: filteredItems  
    });
  }

  render() {    
    return (      
      <div className="todoListMain">        
        <div className="header">
        <Title>To-do List Application</Title>
          <form onSubmit={this.addItem}>            
            <input ref={(a) => this._inputElement = a} 
              placeholder="enter task">
            </input>            
            <button type="submit">add</button>
          </form>        
        </div>
        <TodoItems entries={this.state.items} 
                  delete={this.deleteItem}/> 
                      
        <Flex> 
            <Box color='black' bg='#60CCFF' p={3}> 
                <Link href='www.linkedin.com/in/tobyzellmer'>About the creator</Link>
            </Box>
        </Flex>
      </div>

    );  
  }
} 

export default TodoList;