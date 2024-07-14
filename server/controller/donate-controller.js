import donation from "../models/donate.js";
import { paymentUs } from "./paymentUs.js";

export const donateUs = async (request, response) => {
  try {
    const { donationType, amount, customAmount, frequency } = request.body;
    const amountFinal = amount ? amount : customAmount;

    const responsePayment = await paymentUs({ amountFinal, mobileNumber: 1234567891 });
    
    if (responsePayment.success) {
      // Handle successful payment
      // const donated = new donation();
      response.status(200).json({ message: "Donation successful", data: responsePayment });
    } else {
      response.status(400).json({ message: responsePayment.message, data: responsePayment });
    }
  } catch (error) {
    response.status(500).json({ message: "Internal server error", error: error.message });
  }
};
