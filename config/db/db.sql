CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(16) NOT NULL UNIQUE,
    password varchar(128) NOT NULL,
    display_picture varchar(128)
);

INSERT INTO users (username, password, display_picture)
VALUES ('benji', 'password', 'https://i.ibb.co/Zg851qy/ME-2.png');

CREATE TABLE questions (
    id SERIAL PRIMARY KEY, 
    category varchar(64) NOT NULL,
    language varchar(64) NOT NULL,
    min_budget integer,
    max_budget integer,
    skill_level varchar(16) NOT NULL,
    description varchar(2048) NOT NULL,
    link varchar(256),
    file varchar(256)
);

INSERT INTO questions 
VALUES (1, 'language', 'React', 10, 125, 'All', 'loremuyabuayd uias duyia sdiu asid asiud ayusd uaid uyiad uia duyia sdiua sdui auid asuduiasd ', 'https://github.com/norvalbv/code-for-me/tree/main/client/src', 'https://i.ibb.co/S6g6W3x/11-06-56-Cyrus-Clothing-location-social-media.jpg')