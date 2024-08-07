import TempAplicant from "../models/temp.Application.js";
import sendEmail from "../services/emailService.js";

export const tempApplicant = async (req , res) => {
    try{
        console.log(req.body)
        const fullName = req.body.fullName
        const email = req.body.email
        const city =req.body.city
        const phone =req.body.phone

    const newApplicant = new TempAplicant({
        fullName: fullName,
        city: city,
        email: email,
        phone: phone,
    })
    const exists = await TempAplicant.findOne({ phone: phone })
    console.log(exists)
    if(exists){
        return res.status(409).json({ msg:"Phone nnumber already registered."})
    }
    if(!newApplicant){
        console.log(`validation failed`)
        return res.status(400).json({ msg:" bad request sent"})
    }

    await newApplicant.save();
    
    let recipients = ['krishjp2538@gmail.com', 'swasarjan@gmail.com' ]

    const emailDataAdmin = {
        from: `${email}`,
        to: recipients.join(', '),
        subject: `Got New Application SwaSarjan: ${email}`,
        text: `You have received a new Application Request from:
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        City: ${city}`,
    };
    await sendEmail(emailDataAdmin);
// below is not reflecting any result
    const emailDataClient = {
        from: `${email}`,
        to: `${email}`,
        subject: `Thank you for Applying into SwaSarjan:`,
        text: `You have Requested a MemberSHip into SwaSarjan NGO:
        Thank you for taking one step forward tawrds the social service, we work for society and for Environment.We will reach you in shortly for further communication.
        Thank You: ${fullName}
        
        Have A Nice Day!
        SwaSarjan NGO`,
    };
    await sendEmail(emailDataClient);

    console.log(`applied successfully`)
    return res.status(200).json({ msg: 'Apllied successfully!'})
    
} catch(error){
        console.log(error)
        return res.status(400).json({ msg: 'Aplication failed due to server error! , pls try again later',error})
    }

}