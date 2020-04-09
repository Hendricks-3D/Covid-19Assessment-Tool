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
    symptom_fatigue;
    symptom_cough:string;
    symptom_sore_throat:string;
    symptom_chest_pain:string;
    symptom_date:string;
    symptom_none:string;
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

    //contact
    contact_confirm:string;//Stores where or not user was with a confirmed covid case
    contact_suspect:string;//Stores where or not user was with someone who is a coivid suspect
    contact_symptom:string;//Stores where or not user was with someone who has covid symptom
    contact_travel:string;//Stores where or not user was with someone who travel

    //emergency info
    emergency_name:string;
    emergency_number:string;

}
