import { archetypes } from './archetypes/index.js'
import { skin } from './skin.js'

export const previewData = {
    skin,
    archetypes,

    globalResolver: (name) => eval(name),
}
