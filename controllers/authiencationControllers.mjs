import catchAsync from "../ultils/catchAsync.mjs";
import appError from "../ultils/appError.mjs";
import User from "../models/userModel.mjs";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import crypto from "crypto";
import bcrypt from 'bcryptjs';
import userController from '../connect/user_connect.mjs'
const createToken = (email) => {
  return jwt.sign({ email }, 'khoa.dp210486@sis.hust.edu.vn', {
    expiresIn: "7d",
  });
};
const sendToken = (user, req, res) => {
  const token = createToken(user.email);
  res.cookie("jwt", token);
  res.status(201).json({
    status: "success",
    user,
    token,
  });
};
const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
//   const user = await User.findOne({ email }).select("+password");
//   const check = await correctPassword(password, user.password);
  const user = await userController.getOneUser(email);
  const check = await correctPassword(password,user.password)
  console.log(user);
  if (!user || !check)
    return next(new appError("Can not find user with that email", 404));
  sendToken(user, req, res);
});
const signup = catchAsync(async (req, res, next) => {
  const { name, password, email, passwordConfirm, address, phone } = req.body;
  const p_password = await hashPassword(password);

  const {newUser} = await userController.createUser(
    {p_email: email,
    p_phone: phone,
    p_address: address, 
    p_name: name,
    p_password,
    p_password_confirm: p_password}
  );
    sendToken(newUser, req, res);

});
const logout = catchAsync(async (req, res, next) => {
  res.cookie("jwt", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 10 * 1000),
  });
  res.status(200).json({
    status: "success",
  });
});
const protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  if (!token) return next(new appError("you are not allowed to access", 404));
  const payload = await promisify(jwt.verify)(token, 'khoa.dp210486@sis.hust.edu.vn');
  const user = await userController.getOneUser(payload.email);
  if (!user) {
    return next(
      new appError("The user belonging to this token does no longer exist"),
      401
    );
  }
//   const decoded = await promisify(jwt.verify)(token, 'khoa.dp210486@sis.hust.edu.vn');
//   if (user.changedPassAfter(decoded.iat)) {
//     return next(
//       new appError(
//         "User's password has recently changed. Please log in again to get access"
//       ),
//       401
//     );
//   }
  req.user = user;
  res.locals.user = user;
  console.log('----')
  console.log(user)
  console.log('----')

  next();
});
const forgotPassword = catchAsync(async (req, res, next) => {
  //1.Check if user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new appError("User does not exist"), 401);
  }
  //2. Generate the random reset token
  const resetToken = createResetPassToken();
  await user.save({ validateBeforeSave: false });
  //3. Send token to user's email
  //     try {
  //         const resetURL = `${req.protocol}://${req.get(
  //             'host'
  //         )}/api/users/resetPassword/${resetToken}`;
  //         await new Email(user, resetURL).sendPasswordReset();
  //         res.status(200).json({
  //             status: 'Success',
  //             message: 'Token was sent to email successfully',
  //         });
  //     } catch (err) {
  //         user.passwordResetToken = undefined;
  //         user.passwordResetExpires = undefined;
  //         await user.save({ validateBeforeSave: false });
  //     }
});

const resetPassword = catchAsync(async (req, res, next) => {
  //1. Get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  //2. If token is not expired and user exists, set new password
  if (!user) {
    return next(new appError("Token is in valid or expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  //3. Update changedPasswordAt

  //4. Log user in with JWT
  createSendToken(user, req, res);
});
const updatePassword = catchAsync(async (req, res, next) => {
  //1. Get user from collection
  //const user = await User.findById(req.user._id).select('+password');
  const user = await userController.getOneUser(req.user.email);
  //2. Check if POSTED password is correct
  // const correct = await correctPassword(
  //   req.body.passwordCurrent,
  //   user.password
  // );
  // const correct = user.password === req.body.password;
  // if (!correct) {
  //   return next(new appError("Maatj", 401));
  // }
  //3. If correct, update password
  // user.password = req.body.password;
  // user.passwordConfirm = req.body.passwordConfirm;
  // await user.save();
  await userController.updateUserPassword(
  {  p_user_id: user.user_id,
    p_password: req.body.password,
    p_password_confirm: req.body.passwordConfirm}
  );
  //4. Log user in, send JWT
  sendToken(user, req, res);
});
const isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      //2. Verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        'khoa.dp210486@sis.hust.edu.vn'
      );

      //3. Check if user still exist
      const freshUser = await userController.getOneUser(decoded.email);
      if (!freshUser) {
        res.locals.user = null;
        return next();
      }
      //4. Check if users changed password after token was created
    //   if (freshUser.changedPassAfter(decoded.iat)) {
    //     res.locals.user = null;
    //     return next();
    //   }
      //5. User is logged
      res.locals.user = freshUser;
      req.user = freshUser;
      return next();
    }
    res.locals.user = null;
    next();
  } catch (error) {
    // console.log(error);
    res.locals.user = null;
    return next();
  }
};

const adminOnly = async (req, res, next) => {
    if (!req.user || req.user.role === "user")
        return next(new appError("Bạn không có quyền truy cập vào trang này"));
    next()
};

const correctPassword = async function (candidatePass, userPass) {
  return await bcrypt.compare(candidatePass, userPass);
};

const createResetPassToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60000;

  return resetToken;
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

const updateUser = catchAsync(async (req, res, next) => {
  console.log('controller')
  const user = await userController.getOneUser(req.user.email);

  await userController.updateUser({p_user_id: user.user_id, p_email: user.email, ...req.body});
  res.status(201).json({
    status: 'success'
  })
})
export {
  login,
  logout,
  signup,
  resetPassword,
  forgotPassword,
  protect,
  updatePassword,
  isLoggedIn,
  updateUser,
  adminOnly
};
