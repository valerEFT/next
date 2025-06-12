import React from "react";
import { Container } from "./components/shared/container";
import { Title } from "./components/shared/title";
import { Filters, ProductsGroupList, TopBar } from "./components/shared";

const Home = () => {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Фильтрация */}
          <div className=" w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
