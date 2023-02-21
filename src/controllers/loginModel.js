const loginForm = async function (req, res) {
    try {
        let data = req.body;
  
        //Validate the body
    
        if (isValidBody(data)) {
          return res.status(400).send({ status: false, message: "Enter user details" });
        }
    
        //Check the email
    
        if (!data.email) {
          return res.status(400).send({ status: false, message: "Email ID is required" });
        }
    
        //check the password
    
        if (!data.password) {
          return res.status(400).send({ status: false, message: "Password is required" });
        }
    
        //Validate the email
    
        if (isvalidEmail(data.email)) {
          return res.status(400).send({ status: false, message: "Enter a valid email-id" });
        }
    
        //Validate the password
    
        if (validPwd(data.password)) {
          return res.status(400).send({ status: false, message: "Enter a valid password" });
        }
    
        //Email check
    
        const checkValidUser = await Form.findOne({ email: data.email });
    
        if (!checkValidUser) {
          return res.status(400).send({ status: false, message: "Email Id is not correct " });
        }
    
        //Password check
    
        let checkPassword = await bcrypt.compare(data.password,checkValidUser.password);
    
        if (!checkPassword) {
          return res.status(400).send({ status: false, message: "Password is not correct" });
        }
    
        // token generation for the logged in user
    
        let token = jwt.sign({ userId: checkValidUser._id }, "form-reg", {
          expiresIn: "1d",
        });
    
        //set token to the header
    
        res.setHeader("x-api-key", token);
    
        res.status(200).send({ status: true, message: "Successfully Login", data: token });
    } catch (err) {
      res.status(500).send({ msg: err.message });
    }
  };