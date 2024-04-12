export default async function sendContactForm(data) {
  const ContactRes = fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    if (res.ok) alert("sent");
    return res.json();
  });

  return ContactRes;
}
