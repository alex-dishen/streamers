import { Pool } from 'pg'

const pool = new Pool({
  user: 'oleksandr',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'streamers_project'
})

export default pool
