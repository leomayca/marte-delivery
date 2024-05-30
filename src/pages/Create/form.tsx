import React from 'react';
import { Input } from '@/components/ui/input';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm, FormProvider, useWatch } from 'react-hook-form';

interface Address {
  id: number;
  addressName: string;
  addressType: 'storage' | 'factory' | 'distributionPoint';
  planet: 'earth' | 'mars';
  batchCode?: string;
  cep?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  number?: string;
  complement?: string;
}

interface FormProps {
  formId: string;
  setAddresses: (newAddress: Address) => void;
}

const Form: React.FC<FormProps> = ({ formId, setAddresses }) => {
  const form = useForm<Address>();
  const planet = useWatch({ control: form.control, name: "planet" });

  const onSubmit = (data: Address) => {
    setAddresses(data);
  };

  return (
    <FormProvider {...form}>
      <form id={formId} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="addressName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} placeholder="Nome do Endereço" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addressType"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value || ''}>
                    <SelectTrigger>
                      <SelectValue placeholder="Tipo de Endereço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="storage">Armazém</SelectItem>
                        <SelectItem value="factory">Fábrica</SelectItem>
                        <SelectItem value="distributionPoint">Ponto de Distribuição</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="planet"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex flex-col	items-start">
                  <Label className="mb-2">Planeta</Label>
                  <RadioGroup onValueChange={field.onChange} value={field.value || ''} className="flex space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="earth" id="r1" />
                      <Label htmlFor="r1">Terra</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mars" id="r2" />
                      <Label htmlFor="r2">Marte</Label>
                    </div>
                  </RadioGroup>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {planet == "mars" &&
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="batchCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Código do Lote" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        }
        {planet == "earth" &&
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-4">
              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="CEP" className='w-full' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="País" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Estado" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-12 gap-y-2 gap-x-4">
              <div className="col-span-12 md:col-span-6">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Cidade" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-8 md:col-span-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Endereço" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} placeholder="Número" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              <FormField
                control={form.control}
                name="complement"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Complemento" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </>
        }
      </form>
    </FormProvider>
  );
};

export default Form;
