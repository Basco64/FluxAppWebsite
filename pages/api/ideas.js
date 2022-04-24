import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
    if (req.method === 'GET') {

        const filePath = path.join(process.cwd(), 'data', 'ideas.json')
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)

        res.status(200).json(data)

    } else if (req.method === 'POST') {

        const id = req.body.id;
        const idea = req.body.idea;

        const newIdea = {
            id: id,
            idea: idea
        }

        const filePath = path.join(process.cwd(), 'data', 'ideas.json')
        const fileData = fs.readFileSync(filePath)
        const data = JSON.parse(fileData)

        data.Ideas.push(newIdea)
        fs.writeFileSync(filePath, JSON.stringify(data))

        res.status(201).json({ message: "Succes!" })
    }
}