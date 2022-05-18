CREATE TABLE users = (
    id SERIAL PRIMARY KEY,
    username varchar(16) NOT NULL UNIQUE,
    password varchar(128) NOT NULL,
    display_picture varchar(128)
);

INSERT INTO users (username, password, display_picture)
VALUES ('benji', 'password', 'https://i.ibb.co/Zg851qy/ME-2.png');