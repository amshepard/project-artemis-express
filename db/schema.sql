-- Drop the 'artemis' database if it already exists
DROP DATABASE IF EXISTS artemis;
-- Create a new database named 'artemis'
CREATE DATABASE artemis;

-- Connect to the 'artemis' database
\c artemis

-- Drop the 'pets' table if it already exists
DROP TABLE IF EXISTS pets;

-- Create a new table named 'pets'
CREATE TABLE pets (
    -- Define an auto-incrementing primary key column 'id'
    id SERIAL PRIMARY KEY,
    -- Define a 'name' column with text data type that cannot be null
    name TEXT NOT NULL,
    -- Define a 'type' column with text data type that cannot be null
    type TEXT NOT NULL,
    --  Define a 'breed' column with a text data type that cannot be null
    breed TEXT NOT NULL,
    --  Define a 'city' column with a text data type that cannot be null
    city TEXT NOT NULL,
    -- Define a 'found_date' column with a date data type
    found_date DATE
);
