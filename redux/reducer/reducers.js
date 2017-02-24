export const todos =(state = { count: 0 }, action)=>{
    switch (action.type) {
      case 'add':
        return {count:count+1}
        break;

      case 'decrease':
        return {count:count-1}
        break;
      default:
      return state

    }



}
