const router = require('express').Router()
const recipes = require('../../../data/recipes.json')

router.get('/', (_, response) => {
    const summaries = recipes.map(({ id, title, image, prepTime, difficulty }) => ({
        id, title, image, prepTime, difficulty
    }))

    response.json(summaries)
})

router.post('/recipe/add', (request, response) => {
    const newRecipe = {
        id: recipes.length + 1,
        ...request.body
    }

    recipes.push(newRecipe)
    response.json(newRecipe)
})

router.get('/recipe/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const recipe = recipes.find(r => r.id === id)
    response.json(recipe)
})

module.exports = router