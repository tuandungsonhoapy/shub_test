import { routerTask1 } from '@/views/Task1/router'
import { IRouter } from './interface'
import { routerPageError } from '@/views/error/router'
import { routerTask2 } from '@/views/Task2/router'
import { routerTask3 } from '@/views/Task3/router'

const privatePage: IRouter[] = []

const publicPage: IRouter[] = [routerTask1, routerTask2, routerTask3]

privatePage.push(routerPageError)
publicPage.push(routerPageError)

export { privatePage, publicPage }
