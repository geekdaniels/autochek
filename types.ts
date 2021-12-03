export interface GetPopularBrands {
    makeList:   MakeList[];
    pagination: Pagination;
}

export interface MakeList {
    id:       number;
    name:     string;
    imageUrl: string;
}

export interface Pagination {
    total:       number;
    currentPage: number;
    pageSize:    number;
}

export interface GetCars {
    result:     Result[];
    pagination: Pagination;
}

export interface Pagination {
    total:       number;
    currentPage: number;
    pageSize:    number;
}

export interface Result {
    id:                  string;
    title:               string;
    imageUrl:            string;
    year:                number;
    city:                string;
    state:               State;
    gradeScore:          number;
    sellingCondition:    SellingCondition;
    hasWarranty:         boolean;
    marketplacePrice:    number;
    marketplaceOldPrice: number;
    hasFinancing:        boolean;
    mileage:             number;
    mileageUnit:         MileageUnit;
    installment:         number;
    depositReceived:     boolean;
    loanValue:           number;
    websiteUrl:          string;
    stats:               Stats;
    bodyTypeId:          string;
    sold:                boolean;
    hasThreeDImage:      boolean;
}

export enum MileageUnit {
    KM = "km",
    Miles = "miles",
}

export enum SellingCondition {
    Foreign = "foreign",
    Local = "local",
}

export enum State {
    Lagos = "Lagos",
    PortHarcourt = "Port Harcourt",
}

export interface Stats {
    webViewCount:       number;
    webViewerCount:     number;
    interestCount:      number;
    testDriveCount:     number;
    appViewCount:       number;
    appViewerCount:     number;
    processedLoanCount: number;
}


export interface CarDetails {
    features:               any[];
    carFeatures:            any[];
    modelFeatures:          any[];
    damageMedia:            DamageMedia[];
    id:                     string;
    year:                   number;
    insured:                boolean;
    mileage:                number;
    vin:                    string;
    marketplacePrice:       number;
    marketplaceVisible:     boolean;
    marketplaceVisibleDate: string;
    isFeatured:             boolean;
    imageUrl:               string;
    model:                  Model;
    state:                  string;
    country:                string;
    ownerType:              string;
    transmission:           string;
    fuelType:               string;
    sellingCondition:       string;
    bodyType:               BodyType;
    city:                   string;
    marketplaceOldPrice:    number;
    createdAt:              string;
    updatedAt:              string;
    mileageUnit:            string;
    hasWarranty:            boolean;
    hasFinancing:           boolean;
    interiorColor:          string;
    exteriorColor:          string;
    engineType:             string;
    gradeScore:             number;
    installment:            number;
    depositReceived:        boolean;
    loanValue:              number;
    websiteUrl:             string;
    stats:                  Stats;
    sold:                   boolean;
    hasThreeDImage:         boolean;
    inspectorDetails:       InspectorDetails;
    carName:                string;
    financingSettings:      FinancingSettings;
}

export interface BodyType {
    id:       number;
    name:     string;
    imageUrl: string;
}

export interface DamageMedia {
    inspectionItems: InspectionItem[];
    name:            string;
    comment:         string;
}

export interface InspectionItem {
    medias:   any[];
    name:     string;
    response: Response;
}

export enum Response {
    Good = "good",
    NA = "n/a",
}

export interface FinancingSettings {
    loanCalculator: LoanCalculator;
}

export interface LoanCalculator {
    loanPercentage: number;
    ranges:         Ranges;
    defaultValues:  DefaultValues;
}

export interface DefaultValues {
    interestRate: number;
    downPayment:  number;
    tenure:       number;
}

export interface Ranges {
    minInterestRate: number;
    maxInterestRate: number;
    minDownPayment:  number;
    maxDownPayment:  number;
    tenure:          number;
}

export interface InspectorDetails {
    inspectedMakes:    InspectedMake[];
    inspectorFullName: string;
    workshopName:      string;
    totalInspection:   number;
}

export interface InspectedMake {
    count:    number;
    name:     string;
    imageUrl: string;
}

export interface Model {
    modelFeatures: any[];
    id:            number;
    name:          string;
    imageUrl:      string;
    wheelType:     string;
    make:          BodyType;
    popular:       boolean;
}

export interface Stats {
    webViewCount:       number;
    webViewerCount:     number;
    interestCount:      number;
    testDriveCount:     number;
    appViewCount:       number;
    appViewerCount:     number;
    processedLoanCount: number;
}

export interface CarMedia {
    carMediaList: CarMediaList[];
    pagination:   Pagination;
}

export interface CarMediaList {
    id:        number;
    name:      string;
    url:       string;
    createdAt: Date;
    type:      Type;
}

export enum Type {
    ImageJPEG = "image/jpeg",
    VideoMp4 = "video/mp4",
}

export interface Pagination {
    total:       number;
    currentPage: number;
    pageSize:    number;
}
