import React,{Component} from 'react';
import {connect} from 'react-redux';
import {goBack} from '../util/goBack';

class DetailView extends Component {
    constructor(props){
      super(props)
    }
    componentDidMount(){
        console.log('%c detail页面中 componentDidMount =====>props! ','background: #999; color: "red"');
        console.log(this.props,'background: #999; color: "red"');

    }
    go_Back(){
      goBack(this.props);
    }
   render(){
       return (
          <div>
          <p>
          你好我是detail页面
          </p>
          <span onClick={this.go_Back.bind(this)} style={{background:'green'}}>点击我通过绑定的事件返回</span>
          </div>

        )
      }
    }

function mapStateToProps(state) {
    return {
      state:state
    }
}

export const Detail = connect(mapStateToProps)(DetailView)
