import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import DonatePage from '@/components/DonatePage';
import RulesPage from '@/components/RulesPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'donate':
        return <DonatePage />;
      case 'rules':
        return <RulesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-stone to-black">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Index;