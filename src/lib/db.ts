import Database from 'better-sqlite3'

export const db = new Database('data/postal.sqlite', {
    fileMustExist: true
})

db.pragma('journal_mode = WAL')
db.pragma('synchronous = NORMAL')
db.pragma('temp_store = MEMORY')
