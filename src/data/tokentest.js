import 'dotenv/config';
import jwt from 'jsonwebtoken'

const secret_key = "jfh834l3fhkjkfji4" //process.env.JWT_SECRET_KEY;
console.log(secret_key)

export const generateToken = (userData) => {
    const user = {id: userData.id, email: userData.email};
    const expiration = {expiresIn: '1h'};

    return jwt.sign(user, secret_key, expiration);
}

const token = generateToken({id: '1', email: 'joe@example.com'});
console.log("Token: ", token);