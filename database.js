const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "123456",
    database: "postgres",
    host: "localhost",
    port: "5432",
});

const execute = async (query) => {
    try {
        await pool.connect()
        await pool.query(query)
        return true
    } catch (error) {
        console.error(error.stack)
        return false
    }
};

const createTblQuery = `
CREATE TABLE IF NOT EXISTS posts
(
    "id" serial NOT NULL,
    "timestamp" bigint NOT NULL,
    "text" text NOT NULL,
    "author" varchar(100) NOT NULL,
    "image" varchar(100),
    CONSTRAINT test_pkey PRIMARY KEY (id)
);`

execute(createTblQuery).then((result) => {
    insertValues = `
        INSERT INTO posts(
            id, timestamp, text, author, image)
            VALUES (1, 1666475066, 'Tartu 2024', 'Noor Duncan', 'tartu-old-city.jpg') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (2, 1664747066, 'Anyone knows in which room lab is today', 'Davina Charles') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (3, 1664747123, 'Does anybody want to study together at Delta?', 'Kaylum Cruz') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (4, 1664743481, 'Hey everyone, I just found out about our new homework assignment! It seems like the academic surprises just keep coming.', 'Traci May') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (5, 1663623866, E'There are many cool events upcoming! Don\\'t miss them!', 'Issac Neal') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (6, 1662241466, E'New school day, new opportunities! Let\\'s go forward to knowledge!', 'Curtis Graves') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author, image)
            VALUES (7, 1660772666, 'Sara Tyson. WORKING IN TANDEM', 'Melanie Garza', 'tandem.jpg') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (8, 1660427066, 'Remember, student, the main thing that distinguishes a university from a school: your diploma is your problems.', 'Casey Barronn') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author)
            VALUES (9, 1660384800, 'There will be a fire drill tomorrow afternoon', 'Leland Warren') ON CONFLICT DO NOTHING;
        INSERT INTO posts(
            id, timestamp, text, author, image)
            VALUES (10, 1659999203, 'Your studies will take place in this building', 'Ellie Blackwell', 'delta.jpg') ON CONFLICT DO NOTHING;`
    execute(insertValues)
});

module.exports = pool
