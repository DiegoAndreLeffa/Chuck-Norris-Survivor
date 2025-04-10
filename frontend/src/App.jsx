import { useState } from 'react';
import axios from 'axios';
import { AppStayled } from './styled.ts';

function App() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
  
	const gerarSobrevivente = async () => {
		setLoading(true);
		try {
			const res = await axios.get('http://localhost:3001/api/survivor');
			setData(res.data);
		} catch (error) {
			console.error("Erro ao buscar sobrevivente:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AppStayled>	
			<h1>🧟‍♂️ Sobrevivente do Apocalipse Zumbi</h1>

			<p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', marginTop: '2rem' }}>
				Clique no botão abaixo para gerar seu sobrevivente no apocalipse! 🧟‍♀️🔫
			</p>

			<button className='Button' onClick={gerarSobrevivente} disabled={loading}>
				{loading ? 'Gerando...' : 'Gerar Sobrevivente'}
			</button>

			{data && (
				<div className='Card'>
					<img className='Img' src={data.imagem} alt={data.nome} width="120" />
					<h2>{data.nome}, {data.idade} anos</h2>
					<p>🌍 <strong>País:</strong> {data.pais}</p>
					<p>🧠 <strong>Atividade:</strong> {data.atividade}</p>
					<p>🥋 <strong>Dica do Chuck Norris:</strong> <em>"{data.dica}"</em></p>

					{data.inventario && (
						<>
							<h3 style={{ marginTop: '1.5rem' }}>🎒 Inventário:</h3>
							<ul style={{ listStyle: '🧰 ', paddingLeft: '1.5rem', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
							{data.inventario.map((item, index) => (
								<li key={index}>{item}</li>
							))}
							</ul>
						</>
					)}

				</div>
			)}
		</AppStayled>
	);
}

export default App;
