    const server = ((req,res) => {
    const url = req.url;    
    const method = req.method;

    
    
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>New World!</title></head>')
        res.write('<body><h1>Ola, bem vindo</h1></body>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Enviar</button></form></body>')
        res.write('</html>')
        console.log('')
        return res.end();
    }

    if (url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>New World!</title></head>')
        res.write('<body><ul><li>Usuario 01</li></ul></body>')
        res.write('<body><ul><li>Usuario 02</li></ul></body>')
        res.write('<body><ul><li>Usuario 03</li></ul></body>')
        return res.end();
        }

    if (url === '/create-user' && method === 'POST'){    
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
             console.log('chunk', chunk);
        });          
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
             console.log('addUsername', body);

            console.log('Novo Usuário: ', parsedBody.split('=')[1]);

        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    
        }     
  

})

module.exports = server;