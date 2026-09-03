import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service:process.env.SERVICE,
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
})

const emailSend = (email)=>{

const mailOptions = {
    from:process.env.FROM,
    to:email,
    subject: "Pending Order",
    html:"<h2>Your order is Pending Please Confirm it ...</h2>."
    }

    transporter.sendMail(mailOptions,(error)=>{
        if(error){
            console.log("error " ,error)
        }
        console.log("Pending order mail set to ",email)

    })
}


// for apt test 
const emailSendTest = (req,res)=>{

const mailOptions = {
    from:process.env.FROM,
    to:req.body.email,
    subject: "Pending Order",
    html:"<h2>Your order is Pending Please Confirm it ...</h2>."
    }

    transporter.sendMail(mailOptions,(error)=>{
        if(error){
            console.log("error " ,error)
        }
        console.log("Mail send ")
    })
}

export {emailSend ,emailSendTest}
