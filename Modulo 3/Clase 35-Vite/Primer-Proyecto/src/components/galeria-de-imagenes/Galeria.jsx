import React from 'react';
import '../galeria-de-imagenes/Galeriat.css';


function Galeria() {
  return (
    <div className='main'>
    <h1 align="center" color=''>Platos Fuertes</h1>

    <div className='Opcion-d row'>
      <h3 align="left">Nuestra carta inspirada por grandes chefs argentinos ofrece una gran variedad de platos, tanto del Norte Como del nuestro Sur, de sus platos más importantes de toda la Argentina, siempre podes acompañar de nuestra experiencia gastronómica con los mejores vinos. No te limites a la experiencia y deja que tu paladar recorra cada sabor desde Jujuy hasta Tierra del fuego.</h3>
      <img src="src\components\imagenes\portada-1.jpeg" alt="" align="right" />
    </div>
    
	{/* comnienzo de las tarjetas de almuerzo */}

    <div class="container-gral">
				<h1 class="title">Almuerzos y Cenas</h1>
				<div class="container-card">
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src\components\imagenes\asado.jpeg" alt="asado" />
							</div>
							<h2>Asado</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src\components\imagenes\carbonada.jpg" alt="Carbonada" />
							</div>
							<h2>Carbonada</h2>
							<p>Acompañada de variedades de panes</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/bife.jpg" alt="Bife" />
							</div>
							<h2>Bife</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/choripan.jpg" alt="Choripan" />
							</div>
							<h2>Choripan</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/empanadas.jpg" alt="Empanadas" />
							</div>
							<h2>Empanadas</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/locro.jpg" alt="Locro" />
							</div>
							<h2>Locro</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/milanesa.jpg" alt="Milanesa" />
							</div>
							<h2>Milanesa</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/ñoqui.jpg" alt="Ñoquis de Papa" />
							</div>
							<h2>Ñoquis de Papa</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
				</div>
	</div>

	<h1 align="center" color=''>Dulce Truco</h1>

    <div className='Opcion-i row'>
      <h3 align="left">Tanto lo salado como lo dulce de nuestra Argentina vas a poder disfrutar, y en este caso te ofrecemos de la panadería mas tradicional del pais, contamos con productos frescos y de alta calidad, te ofrecemos la panadería que te acompaño en gran parte de tu infancia, sin dejar de lado lo casero ya que eso nos caracteriza.</h3>
      <img src="src/components/imagenes/portada-2.jpeg" alt="" align="right" />
    </div>

	{/* comnienzo de las tarjetas de merienda */}

	<div class="container-gral">
				<h1 class="title">Meriendas y cenas</h1>
				<div class="container-card">
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/medialunas.jpg" alt="Medialunas" />
							</div>
							<h2>Medialunas</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/churros.jpg" alt="Churros" />
							</div>
							<h2>Churros</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/chipa.jpg" alt="Chipa" />
							</div>
							<h2>Chipa</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src/components/imagenes/tortasnegras.jpg" alt="Torta-Negra" />
							</div>
							<h2>Torta Negra</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
				</div>
	</div>


    </div>
  );
};

export default Galeria;