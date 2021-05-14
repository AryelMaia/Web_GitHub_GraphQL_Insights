import React, { Component } from 'react';
import api from './api'

class App extends Component{

  state ={
    insights: []
  }

  async componentDidMount(){

    const resultado = await api.get('');

    //console.log(resultado.data)

    this.setState({insights: resultado.data});
  }


  render(){

    const {insights} = this.state;

    console.log(insights)

    if(insights.length !== 0){
    return(
      
      <div>

          <h2>Insights sobre os Maiores Contribuidores do Projeto Linux:</h2> 
          <h3>{insights[0].mensagem}</h3>
          <p>Login de Identificaçao: {insights[0].login}</p>
          <p>Quantidade de Commits Realizados: {insights[0].valor}</p>

          <h3>{insights[1].mensagem}</h3>
          <p>Login de Identificaçao: {insights[1].login}</p>
          <p>Quantidade de Linhas Adicionadas: {insights[1].valor}</p>

          <h3>{insights[2].mensagem}</h3>
          <p>Login de Identificaçao: {insights[2].login}</p>
          <p>Quantidade de Linhas Removidas: {insights[2].valor}</p>
      </div>
          
    );
    }else{
    
      return(
      
        <div>
  
            <h2>Insights do Projeto Linux:</h2> 
        </div>
            
      );    
    }
  }

}



export default App;
