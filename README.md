curl -X POST http://localhost:5000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "iPhone 15", "price": 1099}'


curl http://localhost:5000/products/1

curl http://localhost:5000/products

curl -X DELETE http://localhost:5000/products/1
