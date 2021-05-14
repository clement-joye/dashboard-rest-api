import { DashboardCardResource } from "./dashboard-card-resource.interface";

export class DashboardCard {
    
    readonly family: string; 
    readonly name: string; 
    readonly datasource: string; 
    readonly pat: string;
    readonly resources: DashboardCardResource[];

    variables: { [key: string] : string };

    status: string = '';
    webUrl: string = '';

    isLoading: boolean = false;

    constructor(obj: any) {
        this.family = obj.family;
        this.name = obj.name;
        this.datasource = obj.datasource;
        this.pat = obj.pat;
        this.resources = obj.resources;
        this.variables = obj.variables;
    }
}
