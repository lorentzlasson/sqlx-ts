import { sql } from "sqlx-ts";

/*
const someInputQuery = sql`
INSERT INTO items (id, food_type, time_takes_to_cook, table_id, points)
VALUES
(?, ?, 2, 1, 2),
(1, 'test', ?, ?, ?);
`
*/

/*
const somePostgresInputQuery = sql`
INSERT INTO items (id, food_type, time_takes_to_cook, table_id, points)
VALUES
($2, $1, 2, $3, 2),
($5, 'test', $4, $7, $6);
`
*/
/*
const someDeleteQuery = sql`
DELETE FROM items WHERE id = ?;
`*/

/*
const someQuery = sql`
SELECT *
FROM items
WHERE points > ?
AND points < ?
OR points = ?
`
*/

const someDeleteQuery = sql`
DELETE FROM items WHERE id = ?
`

/*
const subQuery1 = sql`
-- @db: default
SELECT id, points
FROM items
WHERE id IN (SELECT id FROM items WHERE points > $1);
`
*/

/*
const subQuery2 = sql`
-- @db: default
SELECT id, points
FROM items
WHERE id = (SELECT id FROM items WHERE id = $1);
`
*/

/*
const subquery3 = sql`
-- @db: default
SELECT
	id,
	(SELECT number FROM tables WHERE items.table_id = tables.id and tables.number > $1) as test
FROM items
`
*/

/*
// Querying from an unknown table
const someQuery = sql`SELECT * FROM indexjs_unknown`;

// Inserting more values than expected
const insertQuery = sql`
INSERT INTO items (food_type, time_takes_to_cook, table_id, points)
VALUES ('steak', 1, 1, 1, 1);
`;

///////////////////
// If statements //
///////////////////
if (true) {
const query3 = sql`SELECT * FROM if_statement1;`;
}
*/

