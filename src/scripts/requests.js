export const generateMazeRequest = (width, hegiht) => {
  const loginURI = "http://18.191.133.226:8000/maze/"+width+"x"+hegiht+'/';
  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}

export const solveMazeRequest = (width, hegiht, mazeData) => {
  const loginURI = "http://18.191.133.226:8000/maze/"+width+"x"+hegiht+'/';
  const params = {
    method: "post",
    body: JSON.stringify(mazeData),
    headers: {
      "Content-Type": "application/json"
    }
  }
  return fetch(loginURI, params);
}