import User from '../models/userModel'
import generateToken from '../utils/generateToken'
import userDal from '../dal/userDal'

const authUser = async (email:string,password:string,) => {
    
    const user = await userDal.findUserByEmail(email)
  
    if (user && (await user.matchPassword(password))) {
      const LoginUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      } as any
      return LoginUser
    } else {
      throw new Error('Invalid email or password')
    }
}


const registerUser = async (name:string, email:string, password:string ) => {
   
  
    const userExists = await userDal.findUserByEmail(email)
  
    if (userExists) {
      throw new Error('User already exists')
    }
  
    const user = await 
    userDal.createUser(name,
    email,
    password,)
    

    if (user) {
      const newUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      }
      return newUser
    } else {
      throw new Error('Invalid user data')
    }
  }


export default {
    authUser,
    registerUser
}
  