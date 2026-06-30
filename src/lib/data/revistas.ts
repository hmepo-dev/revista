// Definimos la estructura estricta que debe cumplir cada revista
export interface Revista {
	id: string;
	titulo: string;
	fecha: string;
	resumen: string;
	portada: string;
	pdfUrl: string;
}

// Exportamos la lista de publicaciones previas
export const listaRevistas: Revista[] = [
	{
		id: 'edicion-3',
		titulo: 'Revista IPS - Revisión Semanal',
		fecha: 'Julio 2026',
		resumen: 'Ponte al día con las últimas novedades de IPS.',
		portada: 'https://images.unsplash.com/photo-1698778539388-fd440b64dbe3?w=500&q=80',
		pdfUrl: 'https://drive.google.com/file/d/10HJnb4jMiz5U1h1jEXHZGBfO4THAhnKe/view?usp=sharing'
	},
	{
		id: 'edicion-2',
		titulo: 'Revista IPS - Innovación Tecnológica',
		fecha: 'Mayo 2026',
		resumen:
			'Un repaso completo a las nuevas herramientas de automatización, uso de inteligencia artificial en entornos locales y flujos de trabajo optimizados.',
		portada: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&q=80',
		pdfUrl: 'https://drive.google.com/file/d/10HJnb4jMiz5U1h1jEXHZGBfO4THAhnKe/view?usp=sharing'
	},
	{
		id: 'edicion-1',
		titulo: 'Revista IPS - Edición Especial Junio',
		fecha: 'Junio 2026',
		resumen:
			'En esta edición analizamos los nuevos avances en la gestión digital, optimización de recursos y los planes futuros para el desarrollo de la plataforma web corporativa.',
		portada: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80',
		pdfUrl: 'https://drive.google.com/file/d/10HJnb4jMiz5U1h1jEXHZGBfO4THAhnKe/view?usp=sharing'
	}
];