export async function handler(event, context) {
  const GITHUB_RAW = "https://raw.githubusercontent.com/barry-far/V2ray-Config/refs/heads/main/All_Configs_Sub.txt";

  try {
    const resp = await fetch(GITHUB_RAW, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    if (!resp.ok) {
      return {
        statusCode: resp.status,
        body: "Error fetching original file"
      };
    }

    const text = await resp.text();

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: text
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Netlify function error: " + err.message
    };
  }
}
