import User from '../models/userModel'


const findUserByEmail = async ( email:string) => {
    
    const user = await User.findOne({ email })
    return user
  
}

const createUser = async (name:string, email:string, password:string) => {
    
    const user = await User.create({
        name,
        email,
        password,
      }) as any

      return user
  
}


export default {
    findUserByEmail,
    createUser
}