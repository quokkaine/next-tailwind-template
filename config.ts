import dotenv from 'dotenv'

const config = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
}

if (!config.baseURL) {
    throw new Error('Missing NEXT_PUBLIC_BASE_URL')
}

export default config
