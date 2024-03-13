import { InputPayment, InputField } from "./FormInputs";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { TypeSchema, schemaValidation } from "../../resolver/schemaValidation";
import FormFields from "./FormFields";
import { ResetButton } from "../Button";
import CheckoutHeader from "../(Checkout)/CheckoutHeader";
import { addCoords } from "../../_store/cart/slice";
import { useDispatch } from "react-redux";
import FormCard from "./FormCard";

interface ICep {
  cep: string;
  address: string;
  district: string;
  city: string;
  state: string;
  lat: string;
  lng: string;
  erro?: string;
}

export default function Form() {
  const dispatch = useDispatch();
  const [disabled, setDisable] = useState<boolean>(false);
  const {
    watch,
    register,
    setValue,
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSchema>({
    resolver: zodResolver(schemaValidation),
  });
  const cep = watch("CEP");
  const fetching = async () => {
    try {
      if (cep?.length !== 9) throw new Error();
      const cepFetched = await fetch(
        `https://cep.awesomeapi.com.br/json/${cep}`,
        {
          method: "GET",
        },
      );
      const datas: ICep = await cepFetched.json();
      if (datas) {
        dispatch(addCoords({ latitude: datas.lat, longitude: datas.lng }));
        setError("CEP", { message: "ok" });
        setDisable(true);
        setValue("rua", datas.address);
        setValue("bairro", datas.district);
        setValue("cidade", datas.city);
        setValue("uf", datas.state);
      }
      if (datas.erro) throw new Error("CEP inválido");
    } catch (err) {
      dispatch(addCoords(undefined));
      setDisable(false);
      setValue("bairro", "");
      setValue("cidade", "");
      setValue("rua", "");
      setValue("uf", "");
      setError("CEP", { message: "CEP Inválido" });
    }
  };
  // biome-ignore lint/correctness/useExhaustiveDependencies: <give more values will enter in a infinite loop>
  useEffect(() => {
    if (cep) setValue("CEP", cep.replace(/(\d{5})(\d)/g, "$1-$2"));

    if (!cep || cep.length < 9) {
      dispatch(addCoords(undefined));
      setError("CEP", { message: "ok" });
      setDisable(false);
    }
    if (cep?.length === 9) fetching();
  }, [setValue, cep]);

  const handleSubmitForm = (data: TypeSchema) => {
    console.log(data);
  };

  return (
    <form
      id="teste"
      onSubmit={handleSubmit((data) => handleSubmitForm(data))}
      className="flex w-full flex-wrap space-y-3"
    >
      <FormCard>
        <CheckoutHeader
          title="Endereço de Entrega"
          description="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} className="text-yellow" />}
        />
        <FormFields type="Field">
          <InputField
            placeholder="CEP"
            className="col-span-1"
            maxLength={9}
            error={errors?.CEP}
            {...register("CEP")}
          />
          <ResetButton onClick={() => reset()} />
          <InputField
            placeholder="Rua"
            disabled={disabled}
            error={errors?.rua}
            className="col-span-3"
            {...register("rua")}
          />
          <InputField
            placeholder="Número"
            type="number"
            className="col-span-1"
            {...register("numero", {
              valueAsNumber: true,
            })}
            error={errors?.numero}
          />
          <InputField
            className="col-span-2"
            placeholder="Complemento"
            optional
            {...register("complemento")}
            error={errors?.complemento}
          />
          <InputField
            disabled={disabled}
            placeholder="Bairro"
            {...register("bairro")}
            error={errors?.bairro}
          />
          <InputField
            disabled={disabled}
            placeholder="Cidade"
            className="flex-1"
            {...register("cidade")}
            error={errors?.cidade}
          />
          <InputField
            disabled={disabled}
            placeholder="UF"
            {...register("uf")}
            error={errors?.uf}
            maxLength={2}
            className="col-span row-span-[4/4] "
          />
        </FormFields>
      </FormCard>
      <FormCard>
        <CheckoutHeader
          title="Pagamento"
          description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar className="text-purple" size={22} />}
        />
        <FormFields type="Button" errors={errors?.paymentMethod}>
          <InputPayment
            {...register("paymentMethod")}
            icon={<CreditCard size={16} />}
            title="Cartão de crédito"
            id="credit"
            value="credit"
          />
          <InputPayment
            {...register("paymentMethod")}
            icon={<Bank size={16} />}
            title="cartão de débito"
            id="debit"
            value="debit"
          />
          <InputPayment
            {...register("paymentMethod")}
            icon={<Money size={16} />}
            title="dinheiro"
            id="money"
            value="money"
          />
        </FormFields>
      </FormCard>
    </form>
  );
}
