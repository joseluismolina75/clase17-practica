const express = require('express');
const app = express();
const path = require('path');

//configuramos donde está nuestra carpeta estática
app.use(express.static(path.join(__dirname, 'public'))) 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const port = 3030
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
}
);