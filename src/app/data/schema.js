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
    class IssuesStore {}
    let issuesStore = new IssuesStore();
    let OVT = {
        _id: "test",
        title: "test2",
        exec: "test3"
    };


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
        fields: () => ({
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

    let issueType = new GraphQLObjectType({
       name: 'Issue',
        fields: () => ({
            _id: { type: GraphQLString },
            issueName: { type: GraphQLString },
            impact: { type: GraphQLString },
            impVal: { type: GraphQLString },
            severity: { type: GraphQLString },
            sevVal: { type: GraphQLString },
        })
    });

    let issuesList = async ()=> {
        let data = await db.collection("overviewdata").findOne({},{issues:1, _id:0});
        return data.issues;
    }

    let issuesStoreType = new GraphQLObjectType({
       name: 'IssuesStore',
        fields: () => ({
            issues: {
                type: new GraphQLList(issueType),
                resolve: () => issuesList()
            }
        })
    });

    let createOverviewMutation = mutationWithClientMutationId({
        name: 'CreateOverview',

        inputFields:{
            exec: { type: new GraphQLNonNull(GraphQLString)}
        },

        outputFields: {
            overview:{
                type: overviewType,
                resolve: (obj) => obj.ops[0]
            }
        },

        mutateAndGetPayload: ({exec}) => {
            return db.collection("overviewdata").insertOne({exec});
        }
    });

    let schema = new GraphQLSchema({
        query: new GraphQLObjectType({
            name: 'Query',
            fields: () => ({

                overview: {
                    type: overviewType,
                    resolve: () =>  db.collection("overviewdata").findOne({})

                },
                store: {
                    type: storeType,
                    resolve: () => store
                },
                issuesStore: {
                    type: issuesStoreType,
                    resolve: () => issuesStore
                }
            })
        }),


        mutation: new GraphQLObjectType({
            name: 'Mutation',
            fields: ()=> ({
                createOverview: createOverviewMutation
            })
        })

    });
    return schema;
};

export default Schema;