// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';
import { optional } from 'astro:schema';

// 3. Define your collection(s)
const filmsCollection = defineCollection({
    loader: glob({ pattern:"*.md", base: "./src/content/films" }),
    schema: 
        ({ image }) => z.object({
            title: z.string(),
            date: z.date().optional(),
            time: z.string().optional(),
            projectname: z.string().optional(),
            projectlink: z.string().optional(),
            genre: z.array(z.string()).optional(),
            runtimehour: z.number().optional(),
            runtimemin: z.number().optional(),
            runtimesec: z.number().optional(),
            watchlink: z.string().optional(),
            cover: image(),
        })
});

const projectsCollection = defineCollection({
    loader: glob({ pattern:"*.md", base: "./src/content/projects" }),
    schema: 
        ({ image }) => z.object({
            title: z.string(),
            datefrom: z.date(),
            timefrom: z.string().optional(),
            dateto: z.string().optional(),
            timeto: z.string().optional(),
            place: z.string(),
            regisfrom: z.string().optional(),
            registo: z.string().optional(),
            regislink: z.string().optional(),
            cover: image(),
        }) 
});

const teamCollection = defineCollection({
    loader: file("./src/content/team/team.json", { parser: (text) => JSON.parse(text).team } ),
    schema: ({ image }) => z.object({
        ay: z.number(),
        nickname: z.string(),
        name: z.string(),
        si: z.number(),
        line: z.string(),
        position: z.string(),
        cover: image()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { 
    films: filmsCollection,
    projects: projectsCollection,
    team: teamCollection
};