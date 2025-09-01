import React from "react"
import { useForm } from "../hooks/useForm"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FormContato (){
  const {
    values,
    errors,
    loading,
    sent,
    onChenge,
    handleSubmit,
  } = useForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <label>
          Nome *
          <Input 
            value={values.nome}
            onChange={(e) => onChenge("nome", e.target.value)}
            placeholder="Seu nome"
            autoComplete="given-name"
            disabled={loading}
            className=""
          />
        </label>
        <p className="text-red-500">
          {errors.nome && <small>{errors.nome}</small>}
        </p>
      </div>

      <div>
        <label>
          Sobrenome *
          <Input 
            value={values.sobrenome}
            onChange={(e) => onChenge("sobrenome", e.target.value)}
            placeholder="Seu Sobrenome"
            autoComplete="given-name"
            disabled={loading}
          />
        </label>
        <p className="text-red-500">
          {errors.sobrenome && <small>{errors.sobrenome}</small>}
        </p>
      </div>

      <div>
        <label>
          Email *
          <Input 
            type="email"
            value={values.email}
            onChange={(e) => onChenge("email", e.target.value)}
            placeholder="seuemail@exemplo.com"
            autoComplete="email"
            disabled={loading}
          />
        </label>
        <p className="text-red-500">
          {errors.email && <small>{errors.email}</small>}
        </p>
      </div>

      <div>
        <label>
          Mensagem *
          <Textarea 
            value={values.mensagem}
            onChange={(e) => onChenge("mensagem", e.target.value)}
            placeholder="Como podemos ajudar?"
            rows={5}
            disabled={loading}
          />
        </label>
        <p className="text-red-500">
          {errors.mensagem && <small>{errors.mensagem}</small>}
        </p>
      </div>

      {/* honeypot: escondido do usuario; deve permanecer vazio */}
      <div className="hidden">
        <Input
          value={values.website}
          onChange={(e) => onChenge("website", e.target.value) }
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <Button type="submit" disabled={loading} className="bg-[#2f5334] hover:bg-[#203623] cursor-pointer">
        {loading ? "Enviando..." : "Enviar"}
      </Button>

      {sent === "ok" && (
        <p className="py-3 px-1 text-center rounded-2xl bg-green-100 text-green-700">Mensagem enviada com sucesso</p>
      )}

      {sent === "fail" && Object.keys(errors).length === 0 && (
        <p className="py-3 px-1 text-center rounded-2xl bg-red-100 text-red-700">Não foi possivel enviar. Tente novamente mais tarde.</p>
      )}
    </form>
  )
}