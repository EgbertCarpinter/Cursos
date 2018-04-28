const initialState = {

  threads: [],
  isLoading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {

  switch(action.type) {

    case 'forum-app/THREADS_LOAD_REQUEST':
    break;
    
    case'forum-app/THREADS_LOAD_SUCCESS': 
    break;
   
    case 'forum-app/THREADS_LOAD_FAILURE': 
    break;
   
    case 'forum-app/...':
   }

  return state;
};









