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
            exec: this.props.exec
        };
    }

    getFatQuery() {
        return Relay.QL`
        fragment on CreateOverviewPayload {
            overview { exec }
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