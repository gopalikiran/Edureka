import { response, Router, json, request, urlencoded } from "express";

import cors from 'cors'
import { bug } from '../model/bug';


const router = Router();
var carsOptions = {
    origin: '*', optionSuccessStatus: 200
}



router.route('./bug'.get((_, response) => {
    bug.find((err, data) => {
        if (err)
            throw err
        else
            response.json(data)
    })
})
)

router.route('./bug').post(json(), urlencoded({ extended: false }),
    cors(carsOptions), (response, request) => {
        bug.create(request.body, (err, data) => {
            if (err)
                throw err
            else
                response.send(data)
        })

    })

router.route('/resolveBug/:title').get((response, response) => {
    bug.findOneAndUpdate({ title: request.params.title }, { $set: { status: "resolved" } }, (err, data) => {
        if (err)
            throw err
        else
            response.send('You Have Successfully Resulved the Bug...')

    })
});
export default router;
