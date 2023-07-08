import axios from "axios";

const API_URL = 'http://localhost:3001/api/v1/user';

const URL_LOGIN = API_URL + '/login';
const URL_SINGUP = API_URL + '/signup';
const URL_PROFILE = API_URL + '/profile';

// ### Tony Stark

// - First Name: `Tony`
// - Last Name: `Stark`
// - Email: `tony@stark.com`
// - Password: `password123`

// ### Steve Rogers

// - First Name: `Steve`,
// - Last Name: `Rogers`,
// - Email: `steve@rogers.com`,
// - Password: `password456`

// GET A USER PROFIL

export async function getUserProfile(token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    key: "value",
  };
  try {
    const { data } = await axios.post(
      URL_PROFILE,
      bodyParameters,
      config
    );

    return data.body
  } catch (err) {
    // console.log(err.message);
    return "not found";
  }
}

//LOGIN

export async function postFormData(email, password) {
  try {
    const { data } = await axios.post(
      URL_LOGIN,
      { email: email, password: password }
    );
    const token = data.body.token;
    
    return token;
  } catch (err) {
    // console.log(err.response.data.message);
    return {err: "error", message: err.response.data.message};
  }
}

//CREATE USER

export async function createUser(email, password, firstName, lastName) {
  try {
    await axios.post(
      URL_SINGUP,
      {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }
    );
    return true;
  } catch (err) {
    return false;
  }
}

// MODIFY A USER

export async function modifyUser(firstName, lastName) {
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    firstName: firstName,
    lastName: lastName,
  };

  try {
    await axios.put(
      URL_PROFILE,
      bodyParameters,
      config
    );
  } catch (err) {
    console.log(err.message);
  }
}
