import nodemailer from 'nodemailer'

const config = {
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
}

const transporter=nodemailer.createTransport(config)

 const sendMail= async(email,subject,content)=>{

    try {
        
        let message = {
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: content
        }

        transporter.sendMail(message,(error,info)=>{
            if (error) {
                console.log(error)
            }
            console.log('Mail sent',info.messageId)
        })
    } catch (error) {
        console.log(error)
    }
    
}

export default sendMail