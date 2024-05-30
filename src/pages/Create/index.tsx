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

interface CreateProps {
  formId: string;
}

const Create: React.FC<CreateProps> = ({ formId }) => {

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Cadastrar Entrega</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-4xl">
          <DialogHeader>
            <DialogTitle>Cadastrar Entrega</DialogTitle>
          </DialogHeader>
            <Form formId={formId}/>
          <DialogFooter>
            <Button form={formId} type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Create;
