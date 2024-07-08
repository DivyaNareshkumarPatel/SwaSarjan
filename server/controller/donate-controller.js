import donation from "../models/donate.js"

export const donateUs = (request , response)=>{
    const { donationType , amount , customAmount , frequency } = request.body
    
    // console.log(donationType)
    // console.log(amount)
    // console.log(customAmount)
    // console.log(frequency)

    const amountFinal = amount ? amount : customAmount
    // console.log(amountFinal)

    
    // const donated = new donation()
}