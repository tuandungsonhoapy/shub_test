import axios, { AxiosInstance } from 'axios'
import CONFIG from '@/configs'

class HttpRepository {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: CONFIG.API_BASE_URL,
      timeout: 1000 * 60 * 5
    })

    this.instance.defaults.withCredentials = true
  }

  public getInstance() {
    return this.instance
  }
}

const httpRepository = new HttpRepository()
const httpRepoInstance = httpRepository.getInstance()
export default httpRepoInstance
