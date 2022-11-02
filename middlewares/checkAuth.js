import expressJWT from 'express-jwt';

export const checkAuth = (req, res, next) => {
    const status = true;
    if(status){
        next();
    } else {
        console.log("Anh không có quyền truy cập");
    }
}

export const requireSignin = expressJWT({
    algorithms: ["HS256"],
    secret: "123456",
    requestProperty: "auth" // req.auth    
});
export const isAuth = (req, res, next) => {
    const status = req.profile._id == req.auth._id;
    if(!status){
        res.status(400).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();
}
export const isAdmin = (req, res, next) => {
    if(req.profile.role === 0){
        res.status(401).json({
            message: "Bạn không phải là admin, chim cút"
        })
    }
    next();
}