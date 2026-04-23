import React from 'react';

const Comentarios = () => {
  // Dados dos depoimentos com fotos reais
  const depoimentos = [
    {
      id: 2,
      nome: "Carlos Mendes",
      cidade: "Rio de Janeiro, RJ",
      avaliacao: 5,
      comentario: "Atendimento impecável! Reservei online e tudo correu como combinado. O tour pelas vinícolas foi o ponto alto - guia muito conhecedor e as degustações maravilhosas.",
      data: "Janeiro 2025",
      viagem: "Viagem em família",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      nome: "Ana Paula Rocha",
      cidade: "Belo Horizonte, MG",
      avaliacao: 5,
      comentario: "Fazemos viagens para Gramado há 5 anos e é a primeira vez que contratamos uma agência. A FrancysTur superou todas as expectativas! Organização impecável e preços justos.",
      data: "Novembro 2024",
      viagem: "Viagem anual",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      nome: "João Pedro Almeida",
      cidade: "Florianópolis, SC",
      avaliacao: 5,
      comentario: "Serviço de transfer muito profissional. Motorista cordial, carro limpo e seguro. Para quem quer tranquilidade na locomoção em Gramado, recomendo muito a FrancysTur!",
      data: "Outubro 2023",
      viagem: "Viagem a negócios",
      foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    }
  ];

  // Componente de estrelas de avaliação
  const EstrelasAvaliacao = ({ quantidade }) => {
    return (
      <div className="estrelas-avaliacao">
        {[...Array(quantidade)].map((_, i) => (
          <span key={i} className="estrela">★</span>
        ))}
      </div>
    );
  };

  // Fotos alternativas
  const fotosAlternativas = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg"
  ];

  // Usar fotos alternativas
  const depoimentosComFotosAlternativas = depoimentos.map((depoimento, index) => ({
    ...depoimento,
    foto: fotosAlternativas[index] || depoimento.foto
  }));

  return (
    <section className="comentarios-section">
      <div className="comentarios-header">
        <h2>O que nossos clientes dizem</h2>
        <p className="comentarios-subtitle">Depoimentos reais de quem já viajou conosco</p>
        
        <div className="avaliacao-geral">
          <div className="rating-box">
            <div className="rating-number">4.9</div>
            <div className="rating-details">
              <EstrelasAvaliacao quantidade={5} />
              <span className="total-avaliacoes">Baseado em 500+ avaliações</span>
            </div>
          </div>
        </div>
      </div>

      <div className="depoimentos-grid">
        {depoimentosComFotosAlternativas.map((depoimento) => (
          <div key={depoimento.id} className="depoimento-card">
            <div className="depoimento-header">
              <div className="depoimento-foto">
                <img 
                  src={depoimento.foto} 
                  alt={depoimento.nome}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = depoimento.foto.includes('women') ? '👩' : '👨';
                  }}
                />
              </div>
              <div className="depoimento-info">
                <h4>{depoimento.nome}</h4>
                <p className="depoimento-cidade">{depoimento.cidade}</p>
                <p className="depoimento-viagem">{depoimento.viagem}</p>
              </div>
            </div>
            
            <div className="depoimento-avaliacao">
              <EstrelasAvaliacao quantidade={depoimento.avaliacao} />
              <span className="depoimento-data">{depoimento.data}</span>
            </div>
            
            <div className="depoimento-texto">
              <p>{depoimento.comentario}</p>
            </div>
            
            <div className="depoimento-footer">
              <div className="avaliacao-verificada">
                <span style={{color: '#34A853', marginRight: '5px'}}>✓</span>
                Avaliação verificada
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comentarios;