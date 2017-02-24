export const todos =(state = { count: 0 }, action)=>{
  console.log('reduce ====》中');
    switch (action.type) {
      case 'add':
        return {count: state.count+1}
        break;
      case 'decrease':
        return {count: state.count-1}
        break;
      default:
      return state
    }
}
