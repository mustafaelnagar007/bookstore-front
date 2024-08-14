import {createTransport} from "nodemailer"
import { html } from "./html.js";

  const send = async(options)=>{
       const transporter =createTransport({
        service:"gmail",
       auth: {
      user: "friendam35@gmail.com",
      pass: "ociy jlcn uhkl rfvc",
    },
  });


    const info = await transporter.sendMail({
    from: '"group tesla 👻" <friendam35@gmail.com>', // sender address
    to: `${options.email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: html(`http://localhost:8000/verifaiy/${options.email}`), 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
export{
    send
}