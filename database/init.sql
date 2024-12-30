CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    computer_type VARCHAR(50),
    price DECIMAL(10, 2)
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    client_id INT REFERENCES clients(id),
    product_type VARCHAR(50),
    price DECIMAL(10, 2)
);

INSERT INTO clients (name, age, gender, computer_type, price) VALUES
('John Doe', 30, 'male', 'laptop', 1200.50),
('Jane Smith', 25, 'female', 'desktop', 900.00);

INSERT INTO orders (client_id, product_type, price) VALUES
(1, 'laptop', 1200.50),
(2, 'desktop', 900.00);