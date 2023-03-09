module.exports = function makeRequest(controller) {
  return (req, res) => {
    const headers = { "Content-type": "application/json" };

    const httpRequest = {
      body    : req.body,
      params  : req.params,
      query   : req.query,
      method  : req.method,
      path    : req.path,
      headers
    }
    
    controller(httpRequest)
      .then(httpResponse => {
        res.status(httpResponse.status).send(httpResponse.body);
      })
      .catch(err => {
        res.status(500).send({ message: 'Internal Server Error' });
      })
  }
}