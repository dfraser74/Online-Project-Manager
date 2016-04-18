/**
 * Created by williehuang on 2016-03-27.
 */
import Relay from "react-relay";

class CreateOverviewMutation extends Relay.Mutation {

    getMutation() {
        return Relay.QL`
        mutation { createOverview }
        `;
    }

    getVariables() {
        return {
            exec: this.props.exec,
            description: this.props.description,
            title: this.props.title,
            reference: this.props.reference,
            division: this.props.division,
            owner: this.props.owner,
        };
    }

    getFatQuery() {
        return Relay.QL`
        fragment on CreateOverviewPayload {
            overview {
            title,
            exec,
            description,
            reference,
            division,
            owner,
             }
        }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldsIDs: { overview: this.props.overview.id },
        }];
    }

}

export default CreateOverviewMutation;