const lista = document.getElementById('lista');
async function cargarCursos() {
    try {
        const response = await fetch('/api/cursos');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const cursos = await response.json();
        
        lista.innerHTML = '';

        cursos.forEach(curso => {
            const li = document.createElement('li');

            li.className = "bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300";
            
            const imagenUrl = curso.imagen || 'https://via.placeholder.com/400x200?text=No+Image';

            li.innerHTML = `
                <img src="${imagenUrl}" alt="${curso.titulo}" class="w-full h-48 object-contain bg-gray-50 p-4">
                <div class="p-6">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">${curso.titulo}</h2>
                    <div class="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded">${curso.familia}</span>
                        <span class="font-semibold">${curso.nivel}</span>
                    </div>
                    <p class="text-gray-500">Duración: ${curso.duracion}h</p>
                </div>
            `;
            lista.appendChild(li);
        });

    } catch (error) {
        console.error('Hubo un problema con la petición Fetch:', error);
        lista.innerHTML = `<p class="text-red-500 text-center col-span-full">Error al cargar los cursos: ${error.message}</p>`;
    }
}

cargarCursos();