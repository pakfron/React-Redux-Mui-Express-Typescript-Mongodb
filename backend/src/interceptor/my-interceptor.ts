export const interceptor1 = (req, res, next) => {
    console.log("first");
    if ((req.query.token = "1234")) {
      next();
    } else {
      res.end("no authorization1");
    }
  };
  
  export const interceptor2 = (req, res, next) => {
    console.log("pass2");
    if ((req.query.password = "555")) {
      next();
    } else {
      res.end("no authorization2");
    }
  };