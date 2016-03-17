/**
 * Created by williehuang on 2016-03-10.
 */
import express from 'express';
import fs from 'fs';
import Schema from '../app/data/schema';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';
import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static(__dirname + '/../public'));

(async ()=> {

    try {
            let db = await MongoClient.connect(process.env.MONGO_URL);
            let schema = Schema(db);

            app.use('/graphql', GraphQLHTTP({
                schema,
                graphiql: true
            }));

            app.listen(3000, ()=> console.log("listening on port 3000"));

            let jsonschema = await graphql(schema, introspectionQuery);
            fs.writeFile('./app/data/schema.json', JSON.stringify(jsonschema, null, 2), err => {
                if (err) throw err;

                console.log("parsing JSON schema");
            })

        } catch(e) {
            console.log(e);
        }
})();