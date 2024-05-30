import React, { useState } from 'react';
import Card from '@/components/card';
import Create from '../Create';

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

const List: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      addressName: 'Teste 1',
      addressType: 'storage',
      planet: 'mars',
      batchCode: '12DL'
    },
    {
      id: 2,
      addressName: 'Teste 2',
      addressType: 'factory',
      planet: 'earth',
      cep: '93218400',
      country: 'Brasil',
      state: 'RS',
      city: 'Sapucaia',
      address: 'São Pedro',
      number: '229'
    },
  ]);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    if (selectedCardId === id) {
      setSelectedCardId(null);
    } else {
      setSelectedCardId(id);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Lista de Endereços</h1>
        <Create formId={selectedCardId == null ? "create" : "edit"} setAddresses={setAddresses} />
      </div>
      <div className="card-list grid grid-cols-1 gap-4">
      {addresses.map(addresseData => (
        <Card
          key={addresseData.id}
          {...addresseData}
          onSelect={handleSelect}
          isSelected={addresseData.id === selectedCardId}
        />
      ))}
    </div>
    </div>
  );

  function handleDelete(id: number) {
    console.log(`Delete address with ID ${id}`);
  }
};

export default List;