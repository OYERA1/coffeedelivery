import { Input } from "./Input";
import { MapPinLine } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeSchema, schemaValidation } from "../../resolver/schemaValidation";

interface ICep {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function Form() {
  const [data, setData] = useState<ICep | null>(null);
  const [disabled, setDisable] = useState(false);
  const { watch, register, setValue } = useForm<TypeSchema>({
    resolver: zodResolver(schemaValidation),
  });
  const cep = watch("CEP");

  const fetchCep = async (inputCep: string) => {
    const cepFetched = await fetch(`https://opencep.com/v1/${inputCep}`, {
      method: "GET",
    });
    const datas = await cepFetched.json();
    setData(datas);
    setDisable(true);
  };
  console.log(data);

  useEffect(() => {
    if (data) {
      setValue("bairro", data.bairro);
      setValue("cidade", data.localidade);
      setValue("rua", data.logradouro);
      setValue("uf", data.uf);
    }
  }, [data, setValue]);
  return (
    <form className="flex flex-col gap-8 rounded-md bg-base-card p-10">
      <section className="flex items-start gap-2">
        <MapPinLine className="text-yellow-dark" size={22} />
        <div className="flex flex-col justify-start">
          <h1 className="text-base leading-snug text-base-subtitle">
            Endereço de Entrega
          </h1>
          <p className="text-sm leading-snug text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <Input
          placeholder="CEP"
          className="w-max"
          type="number"
          {...register("CEP", { onBlur: () => !data && fetchCep(cep) })}
        />
        <Input
          placeholder="Rua"
          disabled={disabled}
          className="w-full"
          {...register("rua")}
        />
        <div className="flex gap-3">
          <Input
            placeholder="Número"
            disabled={disabled}
            {...register("numero")}
          />
          <Input
            disabled={disabled}
            placeholder="Complemento"
            optional
            className="flex-1"
            {...register("complemento")}
          />
        </div>

        <div className="flex gap-3">
          <Input
            disabled={disabled}
            placeholder="Bairro"
            className="w-full"
            {...register("bairro")}
          />
          <Input
            disabled={disabled}
            placeholder="Cidade"
            className="flex-1"
            {...register("cidade")}
          />
          <Input
            disabled={disabled}
            placeholder="UF"
            className="max-w-[60px]"
            {...register("uf")}
          />
        </div>
      </section>
    </form>
  );
}
