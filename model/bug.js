import mongoose from 'mongoose'

var bugSchema = mongoose.Schema({
    title: { type: string },
    description: { type: string },
    assignee: { type: string },
    title: { type: string },
    stauts: { type: string, default: " Initiated" }

},
    {
        timestamp: true
    },
    {
        collection="bugs"

    }
)

export default mongoose.model('bug', bugSchema)