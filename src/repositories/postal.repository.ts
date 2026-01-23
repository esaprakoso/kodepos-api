import { db } from '../lib/db'

export interface PostalRecord {
    country: string
    postal_code: string
    province: string | null
    city: string | null
    district: string | null
    village: string | null
}

export const findByProvince = (
    country: string
): PostalRecord[] => {
    const stmt = db.prepare(`
        SELECT
            country,
            province
        FROM postal_codes
        WHERE
            country = ?
        GROUP BY
            country,
            province
    `)

    return stmt.all(country.toUpperCase()) as PostalRecord[]
}

export const findByCity = (
    country: string,
    province: string
): PostalRecord[] => {
    const stmt = db.prepare(`
        SELECT
            country,
            province,
            city
        FROM postal_codes
        WHERE
            country = ?
            and province = ?
        GROUP BY
            country,
            province,
            city
    `)

    return stmt.all(country.toUpperCase(), province) as PostalRecord[]
}

export const findByDistrict = (
    country: string,
    province: string,
    city: string,
): PostalRecord[] => {
    const stmt = db.prepare(`
        SELECT
            country,
            province,
            city,
            district
        FROM postal_codes
        WHERE
            country = ?
            and province = ?
            and city = ?
        GROUP BY
            country,
            province,
            city,
            district
    `)

    return stmt.all(country.toUpperCase(), province, city) as PostalRecord[]
}

export const findByVillage = (
    country: string,
    province: string,
    city: string,
    district: string,
): PostalRecord[] => {
    const stmt = db.prepare(`
        SELECT
            country,
            province,
            city,
            district,
            village
        FROM postal_codes
        WHERE
            country = ?
            and province = ?
            and city = ?
            and district = ?
        GROUP BY
            country,
            province,
            city,
            district,
            village
    `)

    return stmt.all(country.toUpperCase(), province, city, district) as PostalRecord[]
}

export const findByPostalCode = (
    country: string,
    province: string,
    city: string,
    district: string,
    village: string,
): PostalRecord[] => {
    const stmt = db.prepare(`
        SELECT
            country,
            postal_code,
            province,
            city,
            district,
            village
        FROM postal_codes
        WHERE
            country = ?
            and province = ?
            and city = ?
            and district = ?
            and village = ?
    `)

    return stmt.all(country.toUpperCase(), province, city, district, village) as PostalRecord[]
}
