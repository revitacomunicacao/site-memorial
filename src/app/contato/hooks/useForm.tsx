import { useState } from "react";
import type { IForm, FormErrors } from "../types/IForm";
import { postForm } from "../service/contact";

const initialValues: IForm = {
  nome: "",
  sobrenome: "",
  email: "",
  mensagem: "",
  website: "" //honeypot
}

function validate(values: IForm): FormErrors {
  const e: FormErrors = {};

  if(!values.nome || values.nome.trim().length < 2) {
    e.nome = "Informe seu nome (mín. 2 caracteres).";
  }

  if(!values.sobrenome || values.sobrenome.trim().length < 2){
    e.sobrenome = "Informe seu sobrenome (mín. 2 caracteres).";
  }

  if(!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    e.email = "Informe um e-mail válido.";
  }

  if(!values.mensagem || values.mensagem.trim().length < 5) {
    e.mensagem = "Escreva sua mensagem (mín. 5 caracteres)."
  }

  if(values.website) {
    e.website = "Campo Inválido"
  }

  return e;

}

export function useForm() {
  const [values, setValues] = useState<IForm>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<null | "ok" | "fail">(null);

  function onChenge<K extends keyof IForm>(name: K, value: IForm[K]){
      setValues((v) => ({ ...v, [name]: value }));
      setErrors((e) => ({ ...e, [name]: undefined }));
    }

    async function handleSubmit() {
      
      const valError = validate(values);

      if(Object.keys(valError).length > 0) {
        setErrors(valError);
        setSent("fail");
        return;
      }

      setLoading(true);
      setSent(null);

      try{
        await postForm(values);
        setSent("ok");
        setValues(initialValues);
      } catch {
        //erro genérico de rede (não tratamos resposta da API)
        setSent("fail")
      } finally {
        setLoading(false);
      }
    }

    return {
      values,
      errors,
      loading,
      sent,
      onChenge,
      handleSubmit,
    }
}