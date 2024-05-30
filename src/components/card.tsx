import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

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
  onDelete: (id: number) => void;
  isSelected: boolean;
}

const Card: React.FC<Address> = ({ id, addressName, addressType, planet, batchCode, cep, country, state, city, address, number, complement, onSelect, onDelete, isSelected }) => {

  const translatedPlanet: { [key: string]: string } = {
    mars: "Marte",
    earth: "Terra"
  }

  const translatedType: { [key: string]: string } = {
    storage: "Armazém",
    factory: "Fábrica",
    distributionPoint: "Ponto de Distribuição"
  }

  return (
    <div
      className={cn("card p-4 border rounded-lg shadow-md cursor-pointer", {
        "border-blue-500 bg-blue-50": isSelected,
        "border-gray-300": !isSelected,
      })}
      onClick={() => onSelect(id)}
    >
      <div className="mb-2 flex justify-between">
        <h2 className="text-lg font-semibold">{addressName}</h2>
        <Button onClick={() => onDelete(id)}>Excluir</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <strong>Tipo de Endereço:</strong> {translatedType[addressType]}
        </div>
        <div>
          <strong>Planeta:</strong> {translatedPlanet[planet]}
        </div>

        {planet === 'mars' && <div><strong>Código do Lote:</strong> {batchCode}</div>}
        {planet === 'earth' && (
          <>
            <div><strong>CEP:</strong> {cep}</div>
            <div><strong>País:</strong> {country}</div>
            <div><strong>Estado:</strong> {state}</div>
            <div><strong>Cidade:</strong> {city}</div>
            <div><strong>Endereço:</strong> {address}</div>
            <div><strong>Número:</strong> {number}</div>
            {complement && <div><strong>Complemento:</strong> {complement}</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
