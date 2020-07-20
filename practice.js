console.log('hi')


const PORT = process.env.PORT;

console.log(PORT)

const app = require('http').createServer((req, res) => res.send('Oh hello there'));

app.listen(8080, () => {
	console.log('app is running on port 8080')
})	