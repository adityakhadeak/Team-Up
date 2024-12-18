import { check } from "express-validator"

export const registerValidation=[
    check('username','Username is required').not().notEmpty().isString(),
    check('email','Enter valid email address').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('password','Password must be of atleast one special and 6 characters long').isStrongPassword({minLength:6,minSymbols:1}),
    check('firstname','Firstname is required').not().notEmpty().isString().isLength({min:2, max:10}),
    check('lastname','Firstname is required').not().notEmpty().isString()
]


export const loginValidator=[
    check('username','Username is required').not().notEmpty().isString(),
    check('password','Username is required').not().notEmpty().isString(),
]


export const otpMailValidator=[
    check('email','Email is required').not().notEmpty().isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('type','Type is required').not().notEmpty().isString(),
    // check('otp','OTP is required').isNumeric().isLength({max:4,max:4})
]

export const verifyOTPValidator=[
    check('user_id','user_id is required').not().notEmpty().isString(),
    check('otp','OTP is required').not().notEmpty().isNumeric().isLength({max:4,max:4}),
    check('type','Type is required').not().notEmpty().isString(),

]
export const resetPasswordValidator=[
    check('email','Email is required').not().notEmpty().isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('password','Password must be of atleast one special and 6 characters long').not().notEmpty().isStrongPassword({minLength:6,minSymbols:1}),
]