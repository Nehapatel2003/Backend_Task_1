import connection from "../config/config.js";
import { emailSend } from "../Utility/nodeMailer.js";
import cron from "node-cron";

export const sendMail = () => {

    const query = `SELECT  users.email FROM users JOIN orders ON users.id = orders.user_id WHERE orders.status = 'pending'`;
    connection.query(query, (err, result) => {
        if (err) {
            return console.log("Error in Database!", err.message);
        }
        // console.log(result);
        result.map((item) => {
            // console.log("Sending mail to:", item.email);
            emailSend(item.email);
        });
    });
};

cron.schedule("* * * * *", () => {
    // console.log("Checking pending orders...");
    sendMail();
});

// sendMail();

