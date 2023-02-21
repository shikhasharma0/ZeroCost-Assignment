const mongoose = require("mongoose");

const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  if (typeof value === "object" && Object.keys(value).length===0) return false;
  return true;
};


const isValidBody = (object) => {
  if (Object.keys(object).length > 0) {
    return false;
  } else {
    return true;
  }
};



const validString = (String) => {
  if (/\d/.test(String)) {
    return true;
  } else {
    return false;
  }
};

const validMobileNum = (Mobile) => {
  if (/^[6-9]\d{9}$/.test(Mobile)) {
    return false;
  } else {
    return true;
  }
};

const validPwd = (Password) => {
  if (
    /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,15}$/.test(
      Password
    )
  ) {
    return false;
  } else {
    return true;
  }
};

const isValidField = function (value) 
{
    if (typeof value === 'undefined' || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false;

    return true;
};

  
const isValidRequestBody = function (requestBody) 
{
   return Object.keys(requestBody).length > 0;
};

const isValidObjectId = function (objectId)
{
  return mongoose.Types.ObjectId.isValid(objectId);
};

const isValidTitle = function (title)
{
    return ["Mr","Mrs","Miss"].indexOf(title)!=-1;
};

const isValidEmail = function(email)
{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
};


module.exports={isValid,isValidField,isValidRequestBody,isValidObjectId,isValidTitle,isValidEmail, isValidBody, validMobileNum,validPwd, validString, isValidObjectId}






