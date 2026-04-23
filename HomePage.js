import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header";
import { todosProdutos } from "../data/products";
import ProdutoCard from "../pages/ProductCard";
import ComentariosTripAdvisor from '../ComentariosTripAdvisor';

const HomePage = () => {
  const produtosDestaque = todosProdutos.slice(0, 6);
  
  return (
    <>
      <Header/>
      <div className="home-container">
        <div className="hero-section">
          <h1>Bem-vindo à FrancysTur!</h1>
          <p>Sua melhor experiência em Gramado e região</p>
        </div>
        
        <section className="destaque-section">
          <h2>Produtos em Destaque</h2>
          <div className="produtos-grid">
            {produtosDestaque.map(produto => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </section>
        
        {/* SEÇÃO DE COMENTÁRIOS - CORRIGIDA */}
        <ComentariosTripAdvisor />
        
        <section className="categorias-section">
          <h2>Categorias</h2>
          <div className="categorias-grid">
            <Link to="/passeios" className="categoria-card">
              <div className="categoria-icon">🚌</div>
              <h3>Passeios</h3>
              <p>Descubra os melhores roteiros</p>
            </Link>
            
            <Link to="/viniculas" className="categoria-card">
              <div className="categoria-icon">🍷</div>
              <h3>Vinícolas</h3>
              <p>Degustação de vinhos premiados</p>
            </Link>
            
            <Link to="/transfers" className="categoria-card">
              <div className="categoria-icon">🚗</div>
              <h3>Transfers</h3>
              <p>Transporte privativo</p>
            </Link>
            
            <Link to="/jantares" className="categoria-card">
              <div className="categoria-icon">🍽️</div>
              <h3>Jantares</h3>
              <p>Experiências gastronômicas</p>
            </Link>
            
            <Link to="/ingressos" className="categoria-card">
              <div className="categoria-icon">🎟️</div>
              <h3>Ingressos</h3>
              <p>Atrações e parques</p>
            </Link>
            
            <Link to="/natal-luz" className="categoria-card">
              <div className="categoria-icon">🎄</div>
              <h3>Natal Luz</h3>
              <p>Magia de Natal o ano todo</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;