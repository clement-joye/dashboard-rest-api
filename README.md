# dashboard-rest-api
An angular dashboard querying the rest API of different CI provider to monitor pipelines. 

# Requirements

Node v14.15.x or later
Angular 11.x or later

# Personal access tokens

Generate personal access tokens (pat) in all CI providers needed (required to uery rest APIs of CI providers).🔑
Look here for [DevOps](https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=preview-page) and [GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) regarding how to generate your own pat.

# Install

Run ```npm install```

In data.ts, for each item in cards replace the values with your own:

```
{ "family": "Acme", "name": "API Tests Dev", "datasource": "devops-build", "pat": "yourPersonalAccessToken", 
    "variables": {
        "organization": "someOrganisationName",
        "project": "someProjectName",
        "definition": "someBuildName"
    } 
},
```

# Serve

Make sure to do the above and simply run ```ng serve``` for testing purpose.

# Deploy locally

 For deploying your app locally without web server, bundle your app directly to deploy locally with ```ng build --configuration production```
 You can then copy/paste your _dist/_ folder anywhere and open the _index.html_ file with your browser.

> NB: If building your app, make sure to remove that line from yoru index.html file ```<base href="/">```.

# Going further

Have a look at the different rest APIs from your favorite CI providers, and add some more logic (create/update resources, retrieve other resources etc.) to fit your own needs.
See here for [DevOps Azure](https://docs.microsoft.com/en-us/rest/api/azure/devops/) and [GitHub](https://docs.github.com/en/rest/reference) rest APIs documentation :toolbox:

See the following [post](https://clementjoye.medium.com/build-a-local-dashboard-to-overview-your-different-pipelines-902046b34f0c) on Medium for more info.
Don't hesitate if you have any questions.
