/**
 * Created by super on 16/12/14.
 */
import React,{Component} from 'react'
///import {Footer} from './component/index';
require('./css/index.css');
class  App extends Component{
    render(){
        return (

            <div >
                {/**主屏幕**/}
                <div >

                    {/**这里面的内容会被子路由给代替**/}
                    {this.props.children}

                    {/**公共页脚**/}
                    <div >
                      
                    </div>
                    {/**公共页脚**/}
                </div>
                {/**主屏幕**/}
            </div>
        )
    }
}
export default App
