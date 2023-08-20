-- Connect to the 'artemis' database
\c artemis

-- Insert records into the 'pets' table
INSERT INTO pets (name, type, breed, city, found_date) VALUES
    ('Caine', 'dog', 'husky', 'NYC', '2023-03-01'),
    ('Batman', 'dog', 'french bulldog', 'NYC', '2023-04-01'),
    ('Dahmer', 'dog', 'havanese', 'NYC', '2023-05-01'),
    ('Bronson', 'cat', 'donskoy', 'NYC', '2023-06-01'),
    ('Oswald', 'cat', 'sphynx', 'NYC', '2023-07-01'),
    ('Max', 'doge', 'shar pei', 'NYC', '2023-08-01'),
    ('Dominic', 'cat', 'maine coone mix', 'NYC', '2023-01-01'),
    ('Zues', 'dog', 'shih tzu', 'NYC', '2022-03-01'),
    ('Tina', 'turtle', 'red-eared slider', 'NYC', '2021-03-01');
