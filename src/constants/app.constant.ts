export const APP_NAME = 'Investation Team'
export const REDIRECT_URL_KEY = 'redirectUrl'
const ENV = import.meta.env.VITE_APP_ENVIRONMENT
export const API_BASE_URL =
    ENV === 'dev' || ENV === 'production'
        ? 'https://payroll-backend-8faq.onrender.com/api/v1'
        : 'http://localhost:8000/api/v1'
