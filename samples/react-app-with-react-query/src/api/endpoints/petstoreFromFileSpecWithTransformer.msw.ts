/*
 * Generated by orval v5.5.3 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import faker from 'faker'
import type {
  Pets,
  Pet
} from '../model'

export const getShowPetByIdMock = () => ((function() {
                                return {
                                    id: faker.random.number({
                                        min: 1,
                                        max: 99
                                    }),
                                    name: faker.name.firstName(),
                                    tag: faker.helpers.randomize([
                                        faker.random.word(),
                                        undefined
                                    ])
                                };
                            })())

export const getSwaggerPetstoreMSW = () => [
rest.get('*/v:version/pets', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.post('*/v:version/pets', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
        )
      }),rest.get('*/v:version/pets/:petId', (req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getShowPetByIdMock()),
        )
      }),]
