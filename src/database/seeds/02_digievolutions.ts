import Knex from 'knex'

export async function seed(knex: Knex) {
  const digi = [
    { digimon: 39, after: 1 },
    { digimon: 39, after: 150 },
    { digimon: 39, after: 137 },
    { digimon: 39, after: 80 },
    { digimon: 1, after: 8 },
    { digimon: 8, after: 16 },
    { digimon: 8, after: 36 },
    { digimon: 8, after: 22 },
    { digimon: 16, after: 54 },
    { digimon: 16, after: 49 },
    { digimon: 49, after: 97 },
    { digimon: 54, after: 90 },
    { digimon: 90, after: 209 },
    { digimon: 150, after: 54 },
    { digimon: 137, after: 138, },
    { digimon: 137, after: 174, },
    { digimon: 137, after: 182 },
    { digimon: 137, after: 192 },
    { digimon: 51, after: 151 },
    { digimon: 51, after: 128 },
    { digimon: 51, after: 49 },
    { digimon: 80, after: 151 },
    { digimon: 40, after: 2 },
    { digimon: 40, after: 93 },
    { digimon: 2, after: 9 },
    { digimon: 2, after: 38 },
    { digimon: 9, after: 18 },
    { digimon: 18, after: 56 },
    { digimon: 56, after: 209 },
    { digimon: 56, after: 91 },
    { digimon: 91, after: 209 },
    { digimon: 93, after: 67 },
    { digimon: 67, after: 84 },
    { digimon: 67, after: 198 },
    { digimon: 84, after: 130 },
    { digimon: 198, after: 202 },
    { digimon: 38, after: 30 },
    { digimon: 41, after: 7 },
    { digimon: 41, after: 33 },
    { digimon: 41, after: 6 },
    { digimon: 7, after: 14 },
    { digimon: 7, after: 160 },
    { digimon: 7, after: 50 },
    { digimon: 7, after: 94 },
    { digimon: 6, after: 13 },
    { digimon: 6, after: 140 },
    { digimon: 14, after: 43 },
    { digimon: 50, after: 128 },
    { digimon: 13, after: 28 },
    { digimon: 13, after: 34 },
    { digimon: 140, after: 19 },
    { digimon: 43, after: 88 },
    { digimon: 43, after: 199 },
    { digimon: 43, after: 195 },
    { digimon: 43, after: 178 },
    { digimon: 43, after: 32 },
    { digimon: 28, after: 82 },
    { digimon: 34, after: 52 },
    { digimon: 19, after: 83 },
    { digimon: 19, after: 135 },
    { digimon: 19, after: 44 },
    { digimon: 88, after: 204 },
    { digimon: 195, after: 199 },
    { digimon: 195, after: 88 },
    { digimon: 178, after: 195 },
    { digimon: 178, after: 199 },
    { digimon: 32, after: 59 },
    { digimon: 32, after: 167 },
    { digimon: 32, after: 31 },
    { digimon: 32, after: 23 },
    { digimon: 32, after: 129 },
    { digimon: 82, after: 127 },
    { digimon: 52, after: 156 },
    { digimon: 83, after: 96 },
    { digimon: 135, after: 97 },
    { digimon: 44, after: 133 },
    { digimon: 59, after: 118 },
    { digimon: 59, after: 116 },
    { digimon: 59, after: 167 },
    { digimon: 59, after: 99 },
    { digimon: 59, after: 98 },
    { digimon: 167, after: 169 },
    { digimon: 31, after: 169 },
    { digimon: 31, after: 167 },
    { digimon: 31, after: 57 },
    { digimon: 23, after: 87 },
    { digimon: 129, after: 74 },
    { digimon: 129, after: 137 },
    { digimon: 97, after: 168 },
    { digimon: 116, after: 167 },
    { digimon: 116, after: 59 },
    { digimon: 116, after: 118 },
    { digimon: 74, after: 134 },
  ]
  await knex('digievolutions').insert(digi);
}