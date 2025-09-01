import type { IForm } from "../types/IForm";

const ENDPOINT = "https://companhiadamidia.com.br/desenvolvimento/memorial/admin/wp-json/headless/v1/contact";

export async function postForm(data: IForm) {
  //garantindo que o honeypot vai vazio
  const payload = { ...data, website: "" }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return res.json();
}