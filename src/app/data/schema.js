/**
 * Created by williehuang on 2016-03-13.
 */
import { GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import {
    globalIdField,
    fromGlobalId,
    nodeDefinitions,
    connectionDefinitions,
    connectionArgs,
    connectionFromPromisedArray,
    mutationWithClientMutationId
} from "graphql-relay";


let Schema = (db) => {
    class Store {}
    let store = new Store();

    let storeType = new GraphQLObjectType({
        name: 'Store',
        fields: () => ({
            overview: {
                type: new GraphQLList(overviewType),
                resolve: ()=> db.collection("overviewdata").find({}).toArray()
            }
        })
    });

    let overviewType = new GraphQLObjectType({
        name: 'Overview',
        fields: ()=> ({
            _id: { type: GraphQLString },
            title: { type: GraphQLString },
            description: { type: GraphQLString },
            reference: { type: GraphQLString },
            division: { type: GraphQLString },
            owner: { type: GraphQLString },
            exec: { type: GraphQLString },
            assigned: { type: GraphQLString }

        })
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: ()=> ({
                store: {
                    type: storeType,
                    resolve: () => store
                }
            })
        })

    })

};