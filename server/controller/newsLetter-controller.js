import NewsLetter from "../models/newsLetter.js"

export const News = async (req , res) => {
    try{
        const mail = req.body.email
        console.log(mail)
        const exist = await NewsLetter.findOne({ email:mail })
        console.log(exist)
        if(exist){
            return res.status(409).json({ msg: 'Email in use' });
        }
        const newEmail = NewsLetter({ email : mail } )
        console.log(`verified successfully`)
        await newEmail.save()
        console.log('Subscribed successful')
        return res.status(200).json({ msg: 'Subscribed successful' });
    }catch(error){
        console.error('Error during user subscription:', error);
        return res.status(401).json({ msg: 'Subscription failed' });
    }
}