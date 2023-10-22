import axios from "axios";
export default async function GetTenMessages() {
  try {
    const response = await axios.get(`http://localhost:3000/messages/`);
    return response.data;
  } catch (error) {
    console.error("Error in Fetching Messages:", error);
  }
}
