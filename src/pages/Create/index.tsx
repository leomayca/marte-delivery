import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Form from './form';

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

interface CreateProps {
  formId: string;
  setAddresses: React.Dispatch<React.SetStateAction<Address[]>>;
}

const Create: React.FC<CreateProps> = ({ formId, setAddresses }) => {

  const handleSave = (newAddress: Address) => {
    setAddresses(prev => [...prev, { ...newAddress, id: Date.now() }]);
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Cadastrar Entrega</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Cadastrar Entrega</DialogTitle>
          </DialogHeader>
            <Form formId={formId} setAddresses={handleSave}/>
          <DialogFooter>
            <Button form={formId} type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
