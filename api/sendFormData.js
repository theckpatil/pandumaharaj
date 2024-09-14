export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const token = process.env.TELEGRAM_API_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

   const text =   `=============================\n` +
                  `📍📎 New Form Submitted 📎📍\n` +
                  `=============================\n\n` +
                  `========= 🔹 🔸 🔹 🔸 ========\n` +
                  `📍 From : Pandu Maharaj Legacy 📍\n` +
                  `========= 🔹 🔸 🔹 🔸 ========\n\n` +
                  `🔸 🔹 🔸 🔹 🔸 🔹 🔸 🔹 🔸 🔹 🔸\n\n` +
                  `---------------------------------------\n`+
                  `📌  Name  : ${name} \n`+
                  `---------------------------------------\n`+
                  `---------------------------------------\n`+
                  `📌  Email  : ${email} \n`+
                  `---------------------------------------\n`+
                  `---------------------------------------\n`+
                  `📌  Message  : ${message} \n`+
                  `---------------------------------------\n\n`+
                  `🔸 🔹 🔸 🔹 🔸 🔹 🔸 🔹 🔸 🔹 🔸` ;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

      const data = await response.json();
      if (data.ok) {
        res.status(200).json({ message: "Message sent successfully!" });
      } else {
        res.status(500).json({ message: "Failed to send message." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error sending message." });
    }
  } else {
    res.status(405).end(); 
  }
}
