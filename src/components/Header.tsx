interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  return (
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
          <button 
            onClick={() => onPageChange('home')}
            className={`pixel-font transition-colors ${
              currentPage === 'home' 
                ? 'text-minecraft-gold font-bold' 
                : 'text-white hover:text-minecraft-gold'
            }`}
          >
            Главная
          </button>
          <button 
            onClick={() => onPageChange('donate')}
            className={`pixel-font transition-colors ${
              currentPage === 'donate' 
                ? 'text-minecraft-gold font-bold' 
                : 'text-white hover:text-minecraft-gold'
            }`}
          >
            Донаты
          </button>
          <button 
            onClick={() => onPageChange('rules')}
            className={`pixel-font transition-colors ${
              currentPage === 'rules' 
                ? 'text-minecraft-gold font-bold' 
                : 'text-white hover:text-minecraft-gold'
            }`}
          >
            Правила
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;