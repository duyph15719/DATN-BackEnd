import User from "../models/user";
import jwt from 'jsonwebtoken';

// API signup
export const signup = async (req, res) => {
    const { email, name, password} = req.body
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            res.json({
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
// API signin
export const signin = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message: "email không tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({_id: user._id }, "123456", { expiresIn: 60 * 60})

        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        
    }
}
export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        next();
    } catch (error) {
        
    }
}
// API create
export const createUser = async (req, res) => {
    try {
        const user = await new User(req.body).save();
        console.log('user', user);
        res.json(user)    
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm anh ei"
        })
    }
}
// API list 
export const listUser = async (req, res) => { 
    try {
        const users = await User.find().sort({createAt: -1});
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API read
export const readUser = async (req, res) => {
    const filter = { _id: req.params.id}
    try {
        const user = await User.findOne(filter);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API remove
export const removeUser = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const user = await User.findOneAndDelete(condition);
        res.json({
            message: "Đã xóa thành công",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}
// API update
export const updateUser = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const user = await User.findOneAndUpdate(condition, doc, option);
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi không tìm được sản phẩm"
        })
    }
}