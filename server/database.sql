




CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id SERIAL NOT NULL,
  pid SERIAL NOT NULL,
  name varchar(100) NOT NULL,
  price SERIAL NOT NULL,
  quantity SERIAL NOT NULL,
  image varchar(100) NOT NULL
);



CREATE TABLE message (
  id SERIAL PRIMARY KEY,
  user_id SERIAL NOT NULL,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  number varchar(12) NOT NULL,
  message varchar(500) NOT NULL
) ;


CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id SERIAL NOT NULL,
  name varchar(100) NOT NULL,
  number varchar(12) NOT NULL,
  email varchar(100) NOT NULL,
  method varchar(50) NOT NULL,
  address varchar(500) NOT NULL,
  total_products varchar(1000) NOT NULL,
  total_price SERIAL NOT NULL,
  placed_on varchar(50) NOT NULL,
  payment_status varchar(20) NOT NULL DEFAULT 'pending'
);



CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name varchar(100) NOT NULL,
  details varchar(500) NOT NULL,
  price SERIAL NOT NULL,
  image varchar(100) NOT NULL
);

 



CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  user_type varchar(20) NOT NULL 
) ;


CREATE TABLE wishlist (
  id SERIAL PRIMARY KEY,
  user_id SERIAL NOT NULL,
  pid SERIAL NOT NULL,
  name varchar(100) NOT NULL,
  price SERIAL NOT NULL,
  image varchar(100) NOT NULL
);

