import { Request, Response } from 'express'
import {
    findByProvince,
    findByPostalCode,
    findByCity,
    findByDistrict,
    findByVillage
} from '../repositories/postal.repository'

export const getByProvince = (req: Request, res: Response) => {
    const { country } = req.query

    if (!country) {
        return res.status(400).json({
            error: 'country are required'
        })
    }

    const data = findByProvince(
        String(country)
    )

    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.json({
        total: data.length,
        data
    })
}

export const getByCity = (req: Request, res: Response) => {
    const { country, province } = req.query

    if (!country || !province) {
        return res.status(400).json({
            error: 'country and province are required'
        })
    }

    const data = findByCity(
        String(country),
        String(province)
    )

    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.json({
        total: data.length,
        data
    })
}

export const getByDistrict = (req: Request, res: Response) => {
    const { country, province, city } = req.query

    if (!country || !province || !city) {
        return res.status(400).json({
            error: 'country, province and city are required'
        })
    }

    const data = findByDistrict(
        String(country),
        String(province),
        String(city),
    )

    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.json({
        total: data.length,
        data
    })
}

export const getByVillage = (req: Request, res: Response) => {
    const { country, province, city, district } = req.query

    if (!country || !province || !city || !district) {
        return res.status(400).json({
            error: 'country, province, city and district are required'
        })
    }

    const data = findByVillage(
        String(country),
        String(province),
        String(city),
        String(district),
    )

    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.json({
        total: data.length,
        data
    })
}

export const getByPostalCode = (req: Request, res: Response) => {
    const { country, province, city, district, village } = req.query

    if (!country || !province || !city || !district || !village) {
        return res.status(400).json({
            error: 'country, province, city, district and village are required'
        })
    }

    const data = findByPostalCode(
        String(country),
        String(province),
        String(city),
        String(district),
        String(village),
    )

    res.setHeader('Cache-Control', 'public, max-age=86400')
    res.json({
        total: data.length,
        data
    })
}