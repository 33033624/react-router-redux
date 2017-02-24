import React,{Component} from 'react';
import {connect} from 'react-redux'
class My extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
      console.log('componentDidMount =====>',this.props);
  }

  render(){
  return (
      <div>
  hello nihao  wo shi demo

      </div>



  )



  }




}
module.exports =connect()(My);
