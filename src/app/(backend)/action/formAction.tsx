"use server";
import nodemailer from "nodemailer";


export async function sendEmails(formData: FormData) {

  try {
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const phone = formData.get("phone");
    const activeButton = formData.get("activeButton");
    const wordCount = formData.get("wordCount")   // Ensure it's a number
    const selectedService = formData.get("selectedService");
    const selectedSubject = formData.get("selectedSubject");
    const selectedQuestions = formData.get("selectedQuestions");

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_HOST as string,
      port: process.env.NEXT_PUBLIC_PORTS as unknown as number,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_USER, // your SMTP username
        pass: process.env.NEXT_PUBLIC_PASSWORD, // your SMTP password
      },
    });

    // Email options for the client
    const clientMailOptions = {
      from: `Taking My Classes Online® Alert - DLF Recieved <${process.env.NEXT_PUBLIC_MAILFROM}>`,
      to: email,
      subject: 'Your Service Form Submission Confirmation',
      html: `
<body style="margin: 0; padding: 0;   color: black;">
    <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd;  font-family: Google Sans;">
    
       <div style="text-align: center; padding: 10px; background-color:#f5efff;; border-radius: 6px;">
        <div style="display: inline-block; ">
       <img src="https://muhammadumer.sirv.com/logo%20(1).png" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 60px; width: auto;">
     <!-- <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: larger;  font-weight: 600; color: whitesmoke; ">
             Online Exam Relief
            </p> -->
        </div>
    </div>

          
      <div style="padding: 10px 0; text-align: center;">
        <div style="margin: 10px 0;">
            <img style="border-radius: 10px;"  height="250" src="https://muhammadumer.sirv.com/banner-temp.png"  alt="">
        </div>
        </div>
    
      <p style="font-size: 20px;   text-align: center; font-weight: 600;">
        Thank you! We're already making progress on it!<br></p>
   
      <div style=" text-align: center;">
        <div style="margin: 5px 0;">
          <p style="font-size: medium;  text-align: center; color: gray; font-weight: 600; padding-left: 50px; padding-right: 50px;">
            When Online Exam Relief brings you a steal,
            Don’t wait—make it the real deal!
            Secure your spot and take control,
            Order now to achieve your goal!  </p>
        </div>
        </div>


    

      <div style="padding: 10px 0; text-align: center;">
        <div style="margin: 10px 0;">
        <p style="font-size: 20px;  text-align: center; font-weight: 500;">Apply this discount code to begin your journey!</p>
        <a href="https://takingmyclassesonline.com/order-now?coupon=off40">
          <img style="border-radius: 10px;"  height="100" src="https://muhammadumer.sirv.com/Add%20a%20heading%20(2).png"  alt="">
        </a>
        </div>
        </div>


    
     
    
    
      <div style="text-align: center;">
        <p style="font-size: 18px;  font-weight: 400;">You Can Contact Our Support Team 24/7.</p>
        <a href="https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?" target="_blank"  style="display: inline-block; padding: 10px 20px; background-color: #3dad32;  text-decoration: none; font-size: 16px; vertical-align: middle; font-weight: bold; border-radius: 5px; margin: 5px 0; text-align: center; color: whitesmoke;">
          <img style="vertical-align: middle;" width="30px" src="https://muhammadumer.sirv.com/icons8-whatsapp-48.png" alt="">
          Whatsapp Now
        </a>
      </div>
    
      <div style="text-align: center; padding: 10px; font-size: 12px; ">
        <p>Online Exam Relief is a registered trademark of Online Exam Relief, Inc. All rights reserved.</p>
      </div>
    </div>
    </body>
            `
    };

    // Send the client email
    await transporter.sendMail(clientMailOptions);

    // Email options for the support team
    const supportMailOptions = {
      from: `Taking My Classes Online® Alert - DLF Recieved <${process.env.NEXT_PUBLIC_MAILFROM}>`,
      to: `${process.env.NEXT_PUBLIC_MAILTO}`,
      subject: 'New DLF Form Submission',
      html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <p><b>New Submission Details:</b></p>
                <ul>
                    <li><b>Email:</b> ${email}</li>
                    <li><b>Deadline:</b> ${date}</li>
                    <li><b>Phone Number:</b> ${phone}</li>
                    <li><b>Purpose:</b> ${activeButton}</li>
                    <li><b>Word Count:</b> ${wordCount}</li>
                    <li><b>Selected Service:</b> ${selectedService}</li>
                    <li><b>Selected Subject:</b> ${selectedSubject}</li>
                    <li><b>Selected Questions:</b> ${selectedQuestions}</li>
                </ul>
                <p>Please take the necessary actions.</p>
            </div>
            `
    };

    // Send the support email
    await transporter.sendMail(supportMailOptions);

    return { success: "Confirmation and notification emails sent successfully." };

  } catch (error) {
    console.error('Error sending emails:', error);
    return { error: "Failed to send emails." };
  }
}