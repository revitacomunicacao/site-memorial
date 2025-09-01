export interface IForm {
  nome: string;
  sobrenome: string;
  email: string;
  mensagem: string;

  /** Honeypot: SEMPRE ENVIAR "" */
  website: string;
}

export type FormErrors = Partial<Record<keyof IForm, string>>
