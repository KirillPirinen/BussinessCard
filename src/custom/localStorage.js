export const getInitState = () => {
  const stateFromLS = JSON.parse(window.localStorage.getItem("lang"));

  if(stateFromLS) {
    return stateFromLS
  } else {
    window.localStorage.setItem('lang', JSON.stringify("EN"))
    return "EN"
  }
  
};
