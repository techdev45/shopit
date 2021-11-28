const User = require('../models/User');

const ErrorHandler = require('../utils/ErrorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const sendToken = require('../utils/jwtToken');


//Register a user => /api/v1/registered
exports.registerUser = catchAsyncErrors(async(req,res,next)=>{

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'samples/bike',
            url:'https://res.cloudinary.com/dqnpgocdp/image/upload/v1638043755/samples/bike.jpg'

        }
    })

   sendToken(user, 200, res)
})

// Login user => /api/v1/login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //check if email and password is entered by user
    if(!email || !password){
        return next(new ErrorHandler('Please enter email & password', 400))
    }
        //Finding user in DB
        const user = await User.findOne({ email }).select('+password')

        if(!user) {
            return next(new ErrorHandler('Invalid Email or Password', 404));

        }

        //checks if password is correct or not 
        const isPasswordMatched = await user.comparePassword(password);

        if(!isPasswordMatched) {
            return next(new ErrorHandler('Invalid Email or Password', 404));
        }

        sendToken(user, 200, res)
})


//logout user => /api/v1/logout
exports.logout = catchAsyncErrors(async (req, res, next) => {
    res.cookie('token', null, { 
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
})