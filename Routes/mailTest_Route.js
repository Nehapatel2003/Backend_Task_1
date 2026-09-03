import express from 'express'
import {emailSendTest }from '../Utility/nodeMailer.js'
const mailRouter =express.Router();

mailRouter.post("/api/test/sendmail",emailSendTest)

export  default mailRouter ;