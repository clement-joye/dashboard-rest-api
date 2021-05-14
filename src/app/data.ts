export var datasources = [
    {
        "name": "devops-build",
        "resources": [{
            "absoluteUrl": "https://dev.azure.com/${organization}/${project}/_apis/build/latest/${definition}",
            "values": {
                "status": "result",
                "webUrl": "_links.web.href"
            }
        }]
    },
    {
        "name": "devops-release-stage",
        "resources": [{
            "absoluteUrl": "https://vsrm.dev.azure.com/${organization}/${project}/_apis/release/releases?definitionId=${definitionId}&$top=1",
            "values": {
                "releaseId": "value[0].id"
            }
        },
        {
            "absoluteUrl": "https://vsrm.dev.azure.com/${organization}/${project}/_apis/Release/releases/${releaseId}",
            "values": {
                "environmentId": "environments[name~/^${stageName}/i].id"
            }
        },
        {
        "absoluteUrl": "https://vsrm.dev.azure.com/${organization}/${project}/_apis/Release/releases/${releaseId}/environments/${environmentId}",
            "values": {
                "status": "status",
                "webUrl": "release._links.web.href"
            }
        }]
    },
    {
        "name": "github-action-run",
        "resources": [{
            "absoluteUrl": "https://api.github.com/repos/${company}/${repo}/actions/runs",
            "values": {
                "status": "workflow_runs[0].conclusion",
                "webUrl": "workflow_runs[0].html_url"
            }
        }]
    }
];

export var cards = [
    { "family": "Acme", "name": "API Tests Dev", "datasource": "devops-build", "pat": "yourPersonalAccessToken", 
        "variables": {
            "organization": "someOrganisationName",
            "project": "someProjectName",
            "definition": "someBuildName"
        } 
    },
    { "family": "Acme", "name": "API Tests UAT", "datasource": "devops-build", "pat": "yourPersonalAccessToken", 
        "variables": {
            "organization": "someOrganisationName",
            "project": "someProjectName",
            "definition": "someBuildName"
        } 
    },
    { "family": "Acme", "name": "CD - UI Tests", "datasource": "devops-release-stage", "pat": "yourPersonalAccessToken",
        "variables": {
            "organization": "YourOrganisationName",
            "project": "yourProjectName",
            "definitionId": "YourDefinitionId",
            "stageName": "YourStageName"
        } 
    },
    { "family": "Umbrella", "name": "Unit Tests", "datasource": "github-action-run", "pat": "yourPersonalAccessToken",
        "variables": {
            "company": "yourOrganisationName",
            "repo": "yourProjectName",
        } 
    }
]