// import axios from "axios";
// import uniqid from "uniqid";
// import sha256 from "sha256";

// export const paymentUs = async ({ amountFinal, mobileNumber }) => {
//   const PHONE_PE_HOST_URL = `https://api-preprod.phonepe.com/apis/pg-sandbox`;
//   const MERCHANT_ID = `PGTESTPAYUAT`;
//   const SALT_INDEX = 1;
//   const SALT_KEY = `099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
//   const PayEndPoint = "pg/v1/pay";
//   const merchantTransactionId = uniqid();
//   const userId = 125;

//   const payload = {
//     merchantId: MERCHANT_ID,
//     merchantTransactionId: merchantTransactionId,
//     merchantUserId: userId,
//     amount: amountFinal * 100, 
//     redirectUrl: `http://localhost:8000/redirect-url/${merchantTransactionId}`,
//     redirectMode: "REDIRECT",
//     mobileNumber: mobileNumber,
//     paymentInstrument: {
//       type: "PAY_PAGE"
//     }
//   };

//   const bufferObject = Buffer.from(JSON.stringify(payload), "utf8");
//   const base64EncodedPayload = bufferObject.toString("base64");
//   const xVerify = sha256(base64EncodedPayload + PayEndPoint + SALT_KEY) + "###" + SALT_INDEX;

//   const options = {
//     method: "post",
//     url: `${PHONE_PE_HOST_URL}/${PayEndPoint}`,
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json",
//       "X-VERIFY": xVerify
//     },
//     data: {
//       request: base64EncodedPayload
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     const url = response?.data.data.instrumentResponse.redirectInfo?.url
//     response.redirect( url );
//     return response.data
//   } catch (error) {
//     console.error('Payment request failed:', error.response?.data || error.message);
//     throw new Error(error.response?.data?.message || 'Payment request failed');
//   }
// };
