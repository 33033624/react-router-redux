import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
class MyView extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:this.props.count
    }
  }
  componentDidMount(){
    console.log('%c 我的页面中 componentDidMount =====>props! ', 'background: #222; color: #666');
    console.log(this.props, 'background: #222; color: #666');
  }
  add(){
    this.props.dispatch({type:'add'})
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    let count = this.state.count;
  return (
          <div>
             <Link to="/detail" style={{background:'red'}} >
                你好，但是你的给我跳转到详情，并且打印redux的store看看都有啥
             </Link>
             <span onClick={this.add.bind(this)} style={{background:'yellow',color:'black',width:'200px',height:'200px',fontSize:'16px'}}>{count+'+'}</span>
          </div>
        )
      }
    }
function mapStateToProps(state) {
        return {
          count:state.count
        }
    }
export const My=connect(mapStateToProps)(MyView);
