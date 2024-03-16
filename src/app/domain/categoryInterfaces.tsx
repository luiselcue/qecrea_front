import { ProjectDataTypes } from './projectInterfaces'

export interface CategoryDataTypes {
    data:         CategoryTypes[]
}
export interface CategoryTypes {
    attributes: CategoryAttributeTypes;
    id:         number;
}

interface CategoryAttributeTypes {
    locale:        string;
    localizations: Localizations;
    name:          string;
    projects:      ProjectDataTypes;
    slug:          string;
}

interface Localizations {
    data: any[];
}
