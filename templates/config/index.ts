/** @format */
require('dotenv').config()

export const config = {
  appname: '',
  web: {
    port: process.env.PORT || '8087',
    header_name: process.env.HEADER_NAME,
    jwt_secret: process.env.JWT_SECRET,
    jwt_reset_secret: process.env.JWT_RESET_SECRET,
    jwt_duration: process.env.JWT_DURATION,
    jwt_email_duration: process.env.JWT_EMAIL_DURATION,
    jwt_activation: process.env.JWT_ACCOUNT_ACTIVATION,
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
  },
  sendgrid: {
    email_from: process.env.EMAIL_FROM,
    client_url: process.env.CLIENT_URL,
    sendgrid_api_key: process.env.SENDGRID_API_KEY,
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379,
    db: parseInt(process.env.REDIS_DB) || 0,
    ttl: parseInt(process.env.REDIS_DB) * 60 || 60 * 60,
  },
  MONGODB_URL: process.env.MONGODB_URL || '',
  web3: {
    signer_private_key: process.env.SIGNER_PRIVATE_KEY,
    contract_address: process.env.CONTRACT_ADDRESS,
    alchemi_api_key: process.env.ALCHEMY_API_KEY,
    infura_project_id: process.env.INFURA_PROJECT_ID,
    infura_secret: process.env.INFURA_SECRET,
  },
}
