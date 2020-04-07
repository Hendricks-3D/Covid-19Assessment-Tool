export interface IUser {
//personal information
    fullName:string;

    email:string;
    parish:string;
    community:string;
    age:string;
    gender:string;
    mobile:string;
    latitude:number;
    longitude:number;

    //symptoms
    symptom_running_nose:string;
    symptom_fever:string;
    symptom_breathing:string;
    symptom_fatique;
    symptom_cough:string;
    symptom_sore_throat:string;
    symptom_chest_pain:string;
    symptom_date:string;

    //travel information
    travel:string;
    travel_date:string;
    contact_travel_other:string;
    contact_flu_other:string;

    //Pre Existing condition
    pre_diabetes:string;
    pre_hypertension:string;
    pre_respiratory:string;
    pre_lung:string;
    pre_sickle:string;
    pre_heart:string;

    //travel
    countries:string;
    departure_date:string;
    arrival_date:string;
    flight_number:string;
    departure_port:string;
    arrival_port:string;

    //emergency info
    emergency_name:string;
    emergency_number:string;

}
