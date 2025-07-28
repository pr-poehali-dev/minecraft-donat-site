import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-stone to-black">
      {/* Header / Navigation */}
      <header className="minecraft-nav p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/img/0964cfc4-2850-481c-a40a-14f04370a5ec.jpg" 
              alt="Server Logo" 
              className="w-10 h-10 pixelated"
            />
            <h1 className="pixel-font text-2xl text-white font-black">
              MINECRAFT DONATIONS
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
              Главная
            </a>
            <a href="#donate" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
              Донаты
            </a>
            <a href="#rules" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
              Правила
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="minecraft-card bg-gradient-to-br from-minecraft-green to-minecraft-darkBrown mb-12">
            <h2 className="pixel-font text-5xl font-black text-white mb-6 drop-shadow-lg">
              🏰 ДОБРО ПОЖАЛОВАТЬ НА СЕРВЕР 🏰
            </h2>
            <p className="pixel-font text-xl text-gray-200 mb-8 leading-relaxed">
              Лучший майнкрафт сервер с уникальными возможностями!<br/>
              Покупайте донаты и кейсы для улучшения игрового опыта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="minecraft-button bg-minecraft-emerald">
                <Icon name="Play" className="mr-2" />
                ИГРАТЬ СЕЙЧАС
              </Button>
              <Button className="minecraft-button bg-minecraft-gold">
                <Icon name="Users" className="mr-2" />
                НАШЕ СООБЩЕСТВО
              </Button>
            </div>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="minecraft-card text-center">
              <div className="text-3xl mb-2">👥</div>
              <div className="pixel-font text-2xl font-bold text-minecraft-gold">1,247</div>
              <div className="pixel-font text-gray-300">Игроков онлайн</div>
            </div>
            <div className="minecraft-card text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="pixel-font text-2xl font-bold text-minecraft-gold">24/7</div>
              <div className="pixel-font text-gray-300">Работаем без перерывов</div>
            </div>
            <div className="minecraft-card text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="pixel-font text-2xl font-bold text-minecraft-gold">5 лет</div>
              <div className="pixel-font text-gray-300">На рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donate" className="py-20 px-4 bg-gradient-to-b from-black to-minecraft-stone">
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
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="pixel-font text-4xl font-black text-center text-minecraft-gold mb-12">
            📜 ПРАВИЛА СЕРВЕРА 📜
          </h2>

          <div className="minecraft-card">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                  🚫 Общие правила поведения
                </AccordionTrigger>
                <AccordionContent className="pixel-font text-gray-200 space-y-2">
                  <p>• Запрещено использование нецензурной лексики</p>
                  <p>• Уважайте других игроков</p>
                  <p>• Не спамьте в чате</p>
                  <p>• Запрещена реклама других серверов</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                  ⚔️ Правила PvP
                </AccordionTrigger>
                <AccordionContent className="pixel-font text-gray-200 space-y-2">
                  <p>• PvP разрешено только в специальных зонах</p>
                  <p>• Запрещено убийство новичков</p>
                  <p>• Нельзя использовать читы и багы</p>
                  <p>• Договаривайтесь о честном бою</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                  🏠 Правила строительства
                </AccordionTrigger>
                <AccordionContent className="pixel-font text-gray-200 space-y-2">
                  <p>• Стройте только на своей территории</p>
                  <p>• Запрещены неэстетичные постройки</p>
                  <p>• Не стройте слишком близко к другим игрокам</p>
                  <p>• Используйте приват для защиты построек</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                  💰 Правила экономики
                </AccordionTrigger>
                <AccordionContent className="pixel-font text-gray-200 space-y-2">
                  <p>• Честная торговля между игроками</p>
                  <p>• Запрещено создание монополий</p>
                  <p>• Не обманывайте при сделках</p>
                  <p>• Используйте аукцион для крупных продаж</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                  ⚡ Наказания
                </AccordionTrigger>
                <AccordionContent className="pixel-font text-gray-200 space-y-2">
                  <p>• Предупреждение → Мут → Кик → Бан</p>
                  <p>• За серьёзные нарушения - сразу бан</p>
                  <p>• За использование читов - перманентный бан</p>
                  <p>• Обжалование банов на форуме</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="pixel-font text-gray-400 mb-6">
              Помните: незнание правил не освобождает от ответственности!
            </p>
            <Button className="minecraft-button bg-minecraft-emerald">
              <Icon name="MessageSquare" className="mr-2" />
              ЗАДАТЬ ВОПРОС АДМИНИСТРАЦИИ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="minecraft-nav py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="pixel-font text-white mb-4 md:mb-0">
              © 2024 Minecraft Donations. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
                Discord
              </a>
              <a href="#" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
                VK
              </a>
              <a href="#" className="pixel-font text-white hover:text-minecraft-gold transition-colors">
                Телеграм
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;