const mailgun = require('mailgun-js');

exports.handler = async function (event,context){
    console.log(event);
    const{ name, phone, email, destination, number } = JSON.parse(event.body);
    // Perform validation checks
    if(!email || !validateEmail(email)|| !email.endsWith("@gmail.com")){
        return{
            statusCode:400,
            body:JSON.stringify({message:'Invalid Email format'})
        }
    }

    if(!phone || validatePhoneNumber(phone)){
        return{
            statusCode:400,
            body: JSON.stringify({message: 'Invalid phone number'})
        };
    }

    if(number<1){
        return {
            statusCode:400,
            body:JSON.stringify({message:'invalid number of person'})
        };
    }

    const mg= mailgun({
        apiKey:process.env.MAILGUN_API_KEY,
        domain:process.env.MAILGUN_DOMAIN
    });

    const contactData={
        from:'20001003018aman@dcrustm.org',
        to:'20001003018aman@dcrustm.org',
        subject:'New order',

        html:
        `<html>
            <head>
                <style>

                </style>
            </head>
            <body>
                <h1>New Order</h1>
                <h2>Order Details</h2>
                <p>Name: ${name},</p>
                <p>Email: ${email},</p>
                <p>Phone Number: ${phone},</p>
                <p>Date of journey:${dateOfJourney}</p>
                <p>Destingaton place: ${destination}</p>
                <p>Number of member: ${numberOfMember}</p>

            </body>
        </html>`,
    };

    try{
        // Send email to the business
        await mg.messages().send(contactData);

        return{
            statusCode: 200,
            body: JSON.stringify({message:'Email sent SuccesFully'}),
        };
    }catch(error){

        console.error('Error sending email:',error);
        return {
            statusCode:500,
            body:JSON.stringify({message:'Failed to send email'}),
        }
    }
};

// Function to validate email format
function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phone){
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}