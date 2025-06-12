import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Plus } from "lucide-react";
import { Button } from "../ui";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justofy-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
          альфредоБ чеснок
        </p>
        <div className="flex justify-between mt-4 items-center">
          <span className="text-[20px]">
            от <b>{price} Р</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="mr-1"></Plus>
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
