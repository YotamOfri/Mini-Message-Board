import axios from "axios";

export default async function PostnewMessage(newMessage) {
  try {
    const response = await axios.post(
      "https://messageboardapi.onrender.com/new",
      newMessage
    );
    return response.data;
  } catch (error) {
    console.error("Error in Posting The Message");
    throw error;
  }
}
