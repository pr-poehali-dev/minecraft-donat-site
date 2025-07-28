import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const RulesPage = () => {
  return (
    <div className="py-20 px-4">
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
                <p>• Будьте вежливы с новичками</p>
                <p>• Помогайте другим игрокам</p>
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
                <p>• Не устраивайте кемпинг на спавне</p>
                <p>• Возвращайте вещи после дружеских боёв</p>
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
                <p>• Не стройте лестницы к чужим домам</p>
                <p>• Убирайте за собой временные постройки</p>
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
                <p>• Не завышайте цены неоправданно</p>
                <p>• Соблюдайте договорённости</p>
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
                <p>• Повторные нарушения караются строже</p>
                <p>• Администрация имеет право изменить наказание</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="pixel-font text-xl font-bold text-minecraft-gold hover:text-minecraft-emerald">
                🔧 Технические правила
              </AccordionTrigger>
              <AccordionContent className="pixel-font text-gray-200 space-y-2">
                <p>• Запрещено создание лагающих механизмов</p>
                <p>• Максимум 50 мобов на чанк</p>
                <p>• Не используйте дюпы и эксплойты</p>
                <p>• Автоматические фермы должны быть выключаемыми</p>
                <p>• Сообщайте о найденных багах администрации</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <div className="minecraft-card bg-gradient-to-r from-minecraft-brown to-minecraft-darkBrown mb-8">
            <h3 className="pixel-font text-2xl font-bold text-minecraft-gold mb-4">
              ⚠️ ВАЖНО ⚠️
            </h3>
            <p className="pixel-font text-gray-200 mb-4">
              Незнание правил не освобождает от ответственности!<br/>
              Администрация оставляет за собой право изменять правила.
            </p>
            <p className="pixel-font text-minecraft-emerald font-bold">
              Последнее обновление правил: 28.07.2024
            </p>
          </div>
          
          <Button className="minecraft-button bg-minecraft-emerald mr-4">
            <Icon name="MessageSquare" className="mr-2" />
            ЗАДАТЬ ВОПРОС АДМИНИСТРАЦИИ
          </Button>
          <Button className="minecraft-button bg-minecraft-orange">
            <Icon name="Download" className="mr-2" />
            СКАЧАТЬ ПРАВИЛА PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;