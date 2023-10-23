import axios from "axios";
export default async function GetTenMessages() {
  try {
    const response = await axios.get(
      `https://messageboardapi.onrender.com/messages`
    );
    return response.data;
  } catch (error) {
    return [];
  }
}
