// app/api/arena.js
import axios from "axios";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const channelName = url.searchParams.get("channel") || "test-change-log"; // Default channel

    const response = await axios.get(
      `https://api.are.na/v2/channels/${channelName}`
    );
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
