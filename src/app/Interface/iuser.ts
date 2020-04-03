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

}