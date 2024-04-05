import jwt, { decode } from 'jsonwebtoken'
const authentication=async(req,res)=>{

    const authToken=req.header("auth-token")

    try {
        if(!authToken)
        {
            return res.status(401).json({
                success:false,
                message:"Authentication token is required"
            })
        }

        jwt.verify(authToken,process.env.JWT_SECRET,(err,decode)=>{
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ success: false, message: 'Token has expired' });
                } else {
                    return res.status(401).json({ success: false, message: 'Invalid token' });
                }
            }

            if (!decoded.user) {
                return res.status(401).json({ success: false, message: 'Invalid token: No user data' });
            }

            req.user = decoded.user;
            next();
        });
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

export default authentication