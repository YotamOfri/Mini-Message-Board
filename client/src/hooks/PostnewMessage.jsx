import axios from "axios";

export default async function PostnewMessage(newMessage) {
  try {
    const response = await axios.post("http://localhost:3000/new", newMessage);
    return response.data;
  } catch (error) {
    console.error("Error in Posting The Message");
    throw error;
  }
}
