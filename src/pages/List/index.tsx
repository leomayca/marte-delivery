import React, { useState } from 'react';

interface Address {
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
      addressName: 'Teste 1',
      addressType: 'storage',
      planet: 'mars',
      batchCode: '12DL'
    }
  ]);

  return (
    <div>
    </div>
  );

  function handleEdit(id: number) {
    console.log(`Edit address with ID ${id}`);
  }

  function handleDelete(id: number) {
    console.log(`Delete address with ID ${id}`);
  }
};

export default List;