// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const filmsCollection = defineCollection({
    loader: glob({ pattern:"*.md", base: "./src/content/films" }),
    schema: 
        ({ image }) => z.object({
            title: z.string(),
            date: z.string(),
            time: z.string(),
            projectname: z.string(),
            projectlink: z.string(),
            genre: z.array(z.string()),
            runtimehour: z.number(),
            runtimemin: z.number(),
            runtimesec: z.number(),
            watchlink: z.string(),
            cover: image(),
        })
})

const projectsCollection = defineCollection({
    loader: glob({ pattern:"*.md", base: "./src/content/projects" }),
    schema: 
        ({ image }) => z.object({
            title: z.string(),
            datefrom: z.string(),
            timefrom: z.string(),
            dateto: z.string(),
            timeto: z.string(),
            place: z.string(),
            regisfrom: z.string(),
            registo: z.string(),
            regislink: z.string(),
            cover: image(),
        }) 
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { 
    films: filmsCollection,
    projects: projectsCollection
};