import { 
    onUpdateField, 
    onSetError, 
    onSubmitForm, 
    onSetFormErrors 
} from '../../common/helpers';


let property = {
    id: '',
    title: '',
    notes: '',
    email: '',
    phone: '',
    price: '',
    saleTypeIds:'',
    address: '',
    city:'',
    provinceId: '',
    squareMeter: '',
    rooms: '',
    bathrooms: '',
    locationUrl: '',
    mainFeatures: '',
    equipmentIds:'',
    images:''
};

onUpdateField('title', (event) => {
    const value = event.target.value;

    property = {
        ...property,
        title: value
    };

    formValidation.validateField('title', property.title).then(result => {
        onSetError('title', result);
    });
});


/** Recuperamos la info del servidor */
onUpdateField('type', (event) => {
    const value = event.target.value;

    account = {
        ...account,
        type: value,
    };

    //validacion
    formValidation.validateField('type', account.type).then(result => {
        onSetError('type', result); //muestra el error
    });
});