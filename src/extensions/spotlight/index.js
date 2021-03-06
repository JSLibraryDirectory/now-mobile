// @flow
import SpotlightSearch from 'react-native-spotlight-search';

export async function clear() {
	return SpotlightSearch.deleteAllItems();
}

export async function indexDeployments(deployments: Zeit$Deployment[]) {
	SpotlightSearch.indexItems(deployments.map(deployment => ({
		title: deployment.url,
		contentDescription: `${
			deployment.scale
				? `${deployment.scale.current} instance${
					deployment.scale.current !== 1 ? 's' : ''
					  } | `
				: ''
		} ${deployment.state}`,
		uniqueIdentifier: deployment.uid,
		domain: 'deployment',
		keywords: ['zeit', 'now', 'deployment', 'deployments', deployment.name],
	})));
}
