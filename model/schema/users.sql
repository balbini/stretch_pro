DROP TABLE IF EXISTS t_user;

CREATE TABLE t_user (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  current_weight SMALLINT,
  goal_weight SMALLINT,
  strength_goals TEXT,
  cardio_goals TEXT,
  flexibility_goals TEXT
);
