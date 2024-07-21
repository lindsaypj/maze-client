import DEV from '../App';

export const generateMazeRequest = (width, height) => {
  if (DEV) {
    return generateRequest(width, height, "http://localhost:8000");
  }
  return generateRequest(width, height, "http://18.191.133.226:8000");
}

export const solveMazeRequest = (width, height, mazeData) => {
  if (DEV) {
    return solveRequest(width, height, mazeData, "http://localhost:8000");
  }
  return solveRequest(width, height, mazeData, "http://18.191.133.226:8000");
}

const generateRequest = (width, height, url) => {
  const loginURI = url+"/maze/"+width+"x"+height+'/';
  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}

const solveRequest = (width, height, mazeData, url) => {
  const loginURI = url+"/maze/"+width+"x"+height+'/';
  const params = {
    method: "post",
    body: JSON.stringify(mazeData),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}
