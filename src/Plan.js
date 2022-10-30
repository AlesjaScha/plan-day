import { Component } from "react";
import checkMark from './heart..jpg';


export class Plan extends Component { 
    state={
        userInput: " ",
        planDay:[]

    }
    onChangeEvent(e){
        console.log()
        this.setState({userInput:e})
        console.log(e.target.value);
    }
    clickItem(input){
        if (input===" "){
        alert("Bitte geben Sie ein Begriff ein")
        }else{ 
        let listArray=this.state.planDay;
        listArray.push(input);
        console.log(listArray);
        this.setState({planDay:listArray,userInput:""})
        }
    }
    deleteItem(){
        let listArray=this.state.planDay;
        listArray= [];
        this.setState({planDay:listArray})
    }
    groceryList(event){
        const li = event.target;
        li.classList.toggle("list");
    
    }
    onFormSubmit(e){
      e.preventDefault();
    }
    
    render(){
        return(
            
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="heading">
            
           <input className="par" type="text"placeholder="Was werden Sie heute tun ?"
           onChange={(e)=>{this.onChangeEvent(e.target.value)}}
           value={this.state.userInput}/>
           <button onClick={()=>this.clickItem(this.state.userInput)}>+</button>
           </div>
           <ul>
            {this.state.planDay.map((item,index)=>(
                <li onClick={this.groceryList} key={index}>
                    <img src={checkMark} width="40px" alt="check"/>
                    {item}</li>
            ))}
           </ul>
           <div className="heading">
           <button onClick={()=>this.deleteItem()} className="delete">Löschen</button>
           </div>
           </form>
            </div>
            
            
        )
    }

}