export const generateMazeRequest = (width, hegiht) => {
  const loginURI = "http://localhost:8000/maze/"+width+"x"+hegiht+'/';
  const params = {
    method: "get",
    mode: "cors", // TODO: REMOVE FOR DEPLOYMENT
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}

export const solveMazeRequest = (width, hegiht, mazeData) => {
  const loginURI = "http://localhost:8000/maze/"+width+"x"+hegiht+'/';
  const params = {
    method: "post",
    body: JSON.stringify(mazeData),
    mode: "cors", // TODO: REMOVE FOR DEPLOYMENT
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}