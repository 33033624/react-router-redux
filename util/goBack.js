export const goBack =(props)=>{
  console.log('%c 调用封装的goBack! ', 'background: #222; color: #bada55');
  if(props.history.goBack){
      props.history.goBack();
  }
  else{
console.error('goback 不存在');

  }

}
