import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2E7D32' }}>IntelAgro - Plataforma de Agricultura Inteligente</h1>
      
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Sidebar */}
        <div style={{ 
          width: '250px', 
          backgroundColor: '#2E7D32', 
          color: 'white', 
          padding: '20px',
          borderRadius: '8px'
        }}>
          <h2>Menu</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #4CAF50' }}>Dashboard</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #4CAF50' }}>Mapa</li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid #4CAF50' }}>Propriedades</li>
            <li style={{ padding: '10px 0' }}>Relatórios</li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1 }}>
          <h2>Dashboard</h2>
          <p>Visão geral dos dados agrícolas em tempo real</p>

          {/* Metrics */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            marginTop: '20px'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>pH do Solo</h3>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>6.5</div>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', opacity: 0.9 }}>Ideal para cultivo</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #FFC107, #FF9800)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>NPK</h3>
              <div style={{ fontSize: '24px', fontWeight: 'bold' }}>120-55-200</div>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', opacity: 0.9 }}>mg/kg - Nitrogênio baixo</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>NDVI</h3>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>0.82</div>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', opacity: 0.9 }}>Vegetação saudável</p>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, #2196F3, #1976D2)', 
              color: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px' }}>Umidade</h3>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>67%</div>
              <p style={{ margin: '5px 0 0 0', fontSize: '12px', opacity: 0.9 }}>Nível adequado</p>
            </div>
          </div>

          {/* Charts Placeholder */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '20px',
            marginTop: '30px'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 20px 0' }}>Umidade do Solo</h3>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                Gráfico de Umidade do Solo
              </div>
            </div>

            <div style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 20px 0' }}>Produtividade por Cultura</h3>
              <div style={{ 
                height: '200px', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                Gráfico de Produtividade
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            marginTop: '30px'
          }}>
            <h3 style={{ margin: '0 0 20px 0' }}>Alertas Recentes</h3>
            
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              padding: '15px', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              marginBottom: '15px'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#FEF3C7', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ⚠️
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold' }}>
                  Baixo nível de Nitrogênio
                </h4>
                <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#6b7280' }}>
                  Talhão A3 - Recomenda-se aplicação de fertilizante
                </p>
                <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>2 horas atrás</p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              padding: '15px', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#D1FAE5', 
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>
                ✅
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '14px', fontWeight: 'bold' }}>
                  pH ideal alcançado
                </h4>
                <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#6b7280' }}>
                  Talhão B1 - Condições ótimas para plantio
                </p>
                <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>4 horas atrás</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

