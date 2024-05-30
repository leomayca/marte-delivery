import React from "react";
import { cn } from "@/lib/utils";

interface Address {
  id: number;
  addressName: string;
  addressType: string;
  planet: string;
  batchCode?: string;
  cep?: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  number?: string;
  complement?: string;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

const Card: React.FC<Address> = ({ id, addressName, addressType, planet, batchCode, cep, country, state, city, address, number, complement, onSelect, isSelected }) => {
  return (
    <div
      className={cn("card p-4 border rounded-lg shadow-md cursor-pointer", {
        "border-blue-500 bg-blue-50": isSelected,
        "border-gray-300": !isSelected,
      })}
      onClick={() => onSelect(id)}
    >
      <div className="card-header mb-2">
        <h2 className="text-lg font-semibold">{addressName}</h2>
      </div>
      <div className="card-body">
        <p><strong>Tipo de Endereço:</strong> {addressType}</p>
        <p><strong>Planeta:</strong> {planet}</p>
        {planet === 'mars' && <p><strong>Código do Lote:</strong> {batchCode}</p>}
        {planet === 'earth' && (
          <>
            <p><strong>CEP:</strong> {cep}</p>
            <p><strong>País:</strong> {country}</p>
            <p><strong>Estado:</strong> {state}</p>
            <p><strong>Cidade:</strong> {city}</p>
            <p><strong>Endereço:</strong> {address}</p>
            <p><strong>Número:</strong> {number}</p>
            <p><strong>Complemento:</strong> {complement}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
