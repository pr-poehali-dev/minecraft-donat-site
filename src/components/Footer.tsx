const Footer = () => {
  return (
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
              Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;