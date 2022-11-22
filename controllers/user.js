import User from "../models/user";
import jwt from 'jsonwebtoken';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();

        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại"
            });
        } else if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không chính xác"
            });
        } else {
            const { _doc: { password: hashed_password, __v, ...rest } } = user;
            const token = jwt.sign({ _id: user._id, email: user.email }, "DATN", { expiresIn: "3h" });
    
            res.json({
                token,
                user: rest
            });
        }
    } catch (error) {
        res.status(400).json({
            message: "Lỗi",
        });
    }

};

export const signup = async (req, res) => {
    try {
        const exitsEmail = await User.findOne({ email: req.body.email }).exec();

        if (exitsEmail) {
            res.status(400).json({
                message: "Email đã tồn tại trên hệ thống"
            });
        }

        const { _id, email, username, phone, role } = await new User(req.body).save();

        res.json({
            _id,
            email,
            username,
            phone,
            role,
        });
    } catch (error) {
        res.status(400).json({
            message: "Đăng ký tài khoản không thành công",
            error
        });
    }
}

export const checkPassword = async (req, res) => {
    const { _id, password } = req.body;

    try {
        const user = await User.findById(_id).exec();
        if (!user) {
            res.status(400).json({
                message: "Không tìm thấy User"
            });
        } else if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không chính xác"
            });
        } else {
            res.json({
                message: "Mật khẩu chính xác",
                success: true
            });
        }
        
    } catch (error) {
        res.status(400).json({
            message: "Có lỗi xảy ra"
        });
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