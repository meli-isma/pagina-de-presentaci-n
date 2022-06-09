 downloadFile() 
    const downloadInstance = document.createElement('a');
    downloadInstance.href = './C:\Users\tazis\OneDrive\Escritorio\vsc projects\pagina web\imagenes\cv Ismael Galicia Sánchez.pdf';
    downloadInstance.target = '_blank';
    downloadInstance.download = 'Shape up';

    document.body.appendChild(downloadInstance);
    downloadInstance.click();
    document.body.removeChild(downloadInstance);
