import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  return (
    <div className="py-20 px-4">
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

        {/* Server Info */}
        <div className="minecraft-card">
          <h3 className="pixel-font text-3xl font-black text-minecraft-gold mb-8">
            🎮 О СЕРВЕРЕ 🎮
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="pixel-font text-xl font-bold text-minecraft-emerald mb-4">
                Игровые режимы:
              </h4>
              <ul className="space-y-2 pixel-font text-gray-200">
                <li>• Выживание с экономикой</li>
                <li>• PvP арены</li>
                <li>• Творческий мир</li>
                <li>• Мини-игры</li>
                <li>• Клановые войны</li>
              </ul>
            </div>
            <div>
              <h4 className="pixel-font text-xl font-bold text-minecraft-emerald mb-4">
                Особенности:
              </h4>
              <ul className="space-y-2 pixel-font text-gray-200">
                <li>• Уникальные плагины</li>
                <li>• Регулярные ивенты</li>
                <li>• Активная администрация</li>
                <li>• Защита от гриферов</li>
                <li>• Стабильная работа</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;