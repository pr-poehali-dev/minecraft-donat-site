import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DonatePage = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-black to-minecraft-stone">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-font text-4xl font-black text-center text-minecraft-gold mb-12">
          💎 ДОНАТЫ И КЕЙСЫ 💎
        </h2>

        {/* Donation Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "НОВИЧОК",
              price: "199₽",
              image: "/img/a6a7baa9-a143-4785-8b6d-72a3931e0718.jpg",
              features: ["50 алмазов", "Базовый кит", "Приват территории", "Цветной ник"],
              color: "minecraft-green"
            },
            {
              title: "ВОИН",
              price: "499₽", 
              image: "/img/0964cfc4-2850-481c-a40a-14f04370a5ec.jpg",
              features: ["150 алмазов", "Продвинутый кит", "Больше привата", "Эффекты", "Телепорты"],
              color: "minecraft-orange",
              popular: true
            },
            {
              title: "КОРОЛЬ",
              price: "999₽",
              image: "/img/d55d66eb-6c48-49aa-8044-daede4beb2db.jpg", 
              features: ["500 алмазов", "Королевский кит", "Неограниченный приват", "Все эффекты", "Креатив", "Модерские команды"],
              color: "minecraft-gold"
            }
          ].map((pack, index) => (
            <Card key={index} className={`minecraft-card relative overflow-hidden hover:scale-105 transition-transform duration-200 ${pack.popular ? 'ring-4 ring-minecraft-gold' : ''}`}>
              {pack.popular && (
                <Badge className="absolute -top-2 -right-2 bg-minecraft-gold text-black pixel-font font-bold rotate-12">
                  ПОПУЛЯРНЫЙ
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <img 
                  src={pack.image} 
                  alt={pack.title}
                  className="w-16 h-16 mx-auto mb-4 pixelated"
                />
                <CardTitle className={`pixel-font text-2xl font-black text-${pack.color}`}>
                  {pack.title}
                </CardTitle>
                <div className="pixel-font text-3xl font-black text-white">
                  {pack.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {pack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center pixel-font text-gray-200">
                      <Icon name="Check" className="mr-2 text-minecraft-green" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`minecraft-button w-full bg-${pack.color}`}>
                  <Icon name="CreditCard" className="mr-2" />
                  КУПИТЬ
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mystery Cases */}
        <div className="minecraft-card">
          <h3 className="pixel-font text-3xl font-black text-minecraft-gold mb-8 text-center">
            🎁 МИСТИЧЕСКИЕ КЕЙСЫ 🎁
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Обычный кейс",
                price: "99₽",
                description: "Содержит ресурсы, оружие и броню",
                rarity: "Обычный"
              },
              {
                name: "Легендарный кейс", 
                price: "299₽",
                description: "Редкие предметы и эксклюзивные награды",
                rarity: "Легендарный"
              }
            ].map((caseItem, index) => (
              <div key={index} className="minecraft-card bg-gradient-to-r from-minecraft-brown to-minecraft-darkBrown">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="pixel-font text-xl font-bold text-white">{caseItem.name}</h4>
                    <Badge className={`pixel-font ${index === 0 ? 'bg-minecraft-green' : 'bg-minecraft-gold'} text-black`}>
                      {caseItem.rarity}
                    </Badge>
                  </div>
                  <div className="pixel-font text-2xl font-black text-minecraft-gold">
                    {caseItem.price}
                  </div>
                </div>
                <p className="pixel-font text-gray-300 mb-4">{caseItem.description}</p>
                <Button className="minecraft-button bg-minecraft-orange w-full">
                  <Icon name="Gift" className="mr-2" />
                  ОТКРЫТЬ КЕЙС
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="minecraft-card mt-12">
          <h3 className="pixel-font text-2xl font-black text-minecraft-gold mb-6 text-center">
            💳 СПОСОБЫ ОПЛАТЫ 💳
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Банковская карта', 'QIWI', 'Яндекс.Деньги', 'WebMoney'].map((method, index) => (
              <div key={index} className="minecraft-card bg-minecraft-brown text-center py-4">
                <div className="pixel-font text-white font-bold">{method}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;